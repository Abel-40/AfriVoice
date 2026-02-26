import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Clock, Zap } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Session Summary Page for AfriVoice
 * Design Philosophy: Celebratory, encouraging, progress-focused
 * Shows achievements and next steps
 */

export default function SessionSummary() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container py-12 flex flex-col items-center justify-center space-y-8">
        {/* Success Icon */}
        <div className="text-7xl animate-bounce">🎉</div>

        {/* Congratulations */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Great Job!
          </h1>
          <p className="text-lg text-foreground/70">
            You completed your learning session with Dr. Amara
          </p>
        </div>

        {/* Session Stats */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-2xl">
          <Card className="p-6 text-center border-2 border-primary/20 bg-primary/5">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-foreground/70 mb-1">Duration</p>
            <p className="text-2xl font-bold text-foreground">18 min</p>
          </Card>

          <Card className="p-6 text-center border-2 border-secondary/20 bg-secondary/5">
            <BookOpen className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-sm text-foreground/70 mb-1">Messages</p>
            <p className="text-2xl font-bold text-foreground">12</p>
          </Card>

          <Card className="p-6 text-center border-2 border-primary/20 bg-primary/5">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-foreground/70 mb-1">Points Earned</p>
            <p className="text-2xl font-bold text-foreground">150</p>
          </Card>
        </div>

        {/* Key Takeaways */}
        <Card className="w-full max-w-2xl p-8 border-2 border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">
            What You Learned
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span className="text-foreground/80">
                Understanding photosynthesis and its three key components
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span className="text-foreground/80">
                How plants convert sunlight into chemical energy
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span className="text-foreground/80">
                Real-world examples of photosynthesis in nature
              </span>
            </li>
          </ul>
        </Card>

        {/* Achievement Badge */}
        <Card className="w-full max-w-2xl p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-bold text-foreground mb-1">
            Streak Maintained! 🔥
          </h3>
          <p className="text-foreground/70">
            You're on a 7-day learning streak. Keep it up!
          </p>
        </Card>

        {/* Next Steps */}
        <div className="w-full max-w-2xl space-y-4">
          <h3 className="font-bold text-foreground text-center">
            What's Next?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              onClick={() => setLocation("/voice-session")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 gap-2"
            >
              Start Another Session <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setLocation("/dashboard")}
              variant="outline"
              className="text-foreground border-border hover:bg-muted font-semibold h-12"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {/* Recommendation */}
        <Card className="w-full max-w-2xl p-6 bg-muted/50 border-border">
          <p className="text-sm text-foreground/70 text-center">
            <span className="font-semibold text-foreground">
              Recommended Next:
            </span>{" "}
            Try a session with Prof. Ahmed to learn about the chemistry of
            photosynthesis!
          </p>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-foreground/60">
        <p>Keep learning. You're doing amazing! 🌟</p>
      </footer>
    </div>
  );
}
