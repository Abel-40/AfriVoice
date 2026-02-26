import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mic, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

/**
 * Authentication Pages for AfriVoice
 * Design Philosophy: Simple, focused, encouraging
 * Minimal distractions, clear CTAs
 */

interface AuthPageProps {
  type: "signin" | "signup";
}

export function SignIn() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto">
            <Mic className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">AfriVoice</h1>
          <p className="text-foreground/70">Welcome back to learning</p>
        </div>

        {/* Form */}
        <Card className="p-8 border-border">
          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-muted border-border text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-foreground font-semibold"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-muted border-border text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 gap-2"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-foreground/60">
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Button
            onClick={() => setLocation("/signup")}
            variant="outline"
            className="w-full text-foreground border-border hover:bg-muted"
          >
            Create Account
          </Button>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-foreground/60">
            Forgot your password?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function SignUp() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto">
            <Mic className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">AfriVoice</h1>
          <p className="text-foreground/70">Start your learning journey</p>
        </div>

        {/* Form */}
        <Card className="p-8 border-border">
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-muted border-border text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-muted border-border text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Language */}
            <div className="space-y-2">
              <Label
                htmlFor="language"
                className="text-foreground font-semibold"
              >
                Preferred Language
              </Label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>English</option>
                <option>Swahili</option>
                <option>French</option>
                <option>Arabic</option>
                <option>Yoruba</option>
              </select>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-foreground font-semibold"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-muted border-border text-foreground placeholder:text-foreground/50"
              />
              <p className="text-xs text-foreground/60">
                At least 8 characters
              </p>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 gap-2"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-foreground/60">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <Button
            onClick={() => setLocation("/signin")}
            variant="outline"
            className="w-full text-foreground border-border hover:bg-muted"
          >
            Sign In
          </Button>
        </Card>

        {/* Terms */}
        <p className="text-xs text-foreground/60 text-center">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
