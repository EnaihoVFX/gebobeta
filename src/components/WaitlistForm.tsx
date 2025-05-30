import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Users, Sparkles, ArrowRight, Shield } from "lucide-react";
import { supabase } from "@/lib/supabase";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistCount] = useState(12847); // Simulated count
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Insert into Supabase waitlist table
      const { error: supabaseError, data } = await supabase
        .from("waitlist")
        .insert([{ 
          email: email.toLowerCase().trim(),
          status: 'pending'
          // Let the database handle created_at with its default value
        }])
        .select()
        .single();

      if (supabaseError) {
        console.error('Supabase error:', supabaseError); // Add detailed error logging
        // Check if it's a unique constraint error
        if (supabaseError.code === '23505') {
          toast({
            title: "Already registered",
            description: "This email is already on our waitlist!",
            variant: "default",
          });
        } else {
          toast({
            title: "Error joining waitlist",
            description: supabaseError.message,
            variant: "destructive",
          });
        }
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
      toast({
        title: "Welcome to Gebo! 🎉",
        description: "You're now on our exclusive waitlist. Check your email for confirmation!",
      });
    } catch (err) {
      console.error('Waitlist submission error:', err);
      toast({
        title: "Error joining waitlist",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="waitlist" className="py-24 relative overflow-hidden">
      {/* Top fade for seamless blend with Features */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {/* Main rotating circle */}
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-rotate-3d">
                      {/* Inner circles for depth effect */}
                      <div className="absolute inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-rotate-3d" style={{ animationDelay: '-2s' }}></div>
                      <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-rotate-3d" style={{ animationDelay: '-4s' }}></div>
                      <div className="absolute inset-3 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full animate-rotate-3d" style={{ animationDelay: '-6s' }}></div>
                      <div className="absolute inset-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full animate-rotate-3d" style={{ animationDelay: '-8s' }}></div>
                    </div>
                    {/* Glowing effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                    {/* Rotating outer ring */}
                    <div className="absolute -inset-2 border-2 border-purple-500/50 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-200 bg-clip-text text-transparent animate-pulse">
                    transform
                  </span>
                  {" "}your content?
                </h1>
                <p className="text-purple-200/80 text-lg leading-relaxed">
                  Join thousands of creators on our waitlist. Be first to experience AI-powered video editing.
                </p>
              </div>

              {/* Waitlist counter */}
              <div className="flex items-center justify-center mb-6 p-3 bg-purple-800/30 rounded-full border border-purple-500/30">
                <Users className="w-4 h-4 text-purple-300 mr-2" />
                <span className="text-purple-200 text-sm font-medium">
                  {waitlistCount.toLocaleString()} creators already joined
                </span>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 group-focus-within:text-purple-300 transition-colors" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    className="pl-12 pr-4 py-4 text-base bg-purple-900/40 border-purple-600/50 text-white placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 rounded-2xl font-medium transition-all duration-300 hover:bg-purple-900/50"
                    disabled={isLoading}
                  />
                </div>
                
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-2xl text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Joining...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Join Waitlist
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </div>

              {/* Privacy notice */}
              <div className="flex items-center justify-center mt-6 text-purple-300/70 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                We respect your privacy. No spam, ever.
              </div>

              {/* Features preview */}
              <div className="mt-8 space-y-3">
                <div className="text-center text-purple-200/60 text-sm font-medium mb-4">
                  What you'll get early access to:
                </div>
                {[
                  "AI-powered video editing tools",
                  "Monetization features from day one",
                  "Priority customer support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-purple-200/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              {/* Success animation */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full animate-ping"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  You're in! 🎉
                </h2>
                <p className="text-purple-200/80 text-lg leading-relaxed mb-6">
                  Welcome to the Gebo family. We've sent a confirmation email with exclusive updates and early access details.
                </p>
              </div>

              {/* Success stats */}
              <div className="bg-purple-800/30 rounded-2xl p-4 border border-purple-500/30">
                <div className="text-purple-200/60 text-sm mb-1">Your position</div>
                <div className="text-2xl font-bold text-white">#{waitlistCount + 1}</div>
                <div className="text-purple-300/70 text-sm mt-1">Expected launch: Q2 2025</div>
              </div>

              {/* CTA buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="w-full py-3 bg-transparent border-purple-500/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-2xl transition-all duration-300"
                >
                  Invite a Friend
                </Button>
                <div className="text-purple-300/60 text-xs">
                  Share Gebo with friends and unlock exclusive bonuses
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-purple-300/50 text-sm">
          Gebo • AI-Powered Content Creation
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;