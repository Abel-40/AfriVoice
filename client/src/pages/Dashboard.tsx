import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Clock, Zap, TrendingUp, LogOut } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Home Dashboard for AfriVoice
 * Design Philosophy: Clear hierarchy, warm colors, progress-focused
 * Shows learning companions and user journey
 */

export default function Dashboard() {
  const [, setLocation] = useLocation();

  // Mock data
  const companions = [
    {
      id: 1,
      name: "Ms. Sarah",
      subject: "English",
      color: "bg-primary",
      icon: "📚",
      sessions: 12,
    },
    {
      id: 2,
      name: "Prof. Ahmed",
      subject: "Mathematics",
      color: "bg-secondary",
      icon: "🔢",
      sessions: 8,
    },
    {
      id: 3,
      name: "Dr. Amara",
      subject: "Science",
      color: "bg-tertiary",
      icon: "🔬",
      sessions: 5,
    },
    {
      id: 4,
      name: "Mr. Kwame",
      subject: "History",
      color: "bg-primary",
      icon: "🏛️",
      sessions: 3,
    },
  ];

  const sessions = [
    {
      id: 1,
      companion: "Ms. Sarah",
      duration: "15 min",
      date: "Today",
      progress: 75,
    },
    {
      id: 2,
      companion: "Prof. Ahmed",
      duration: "20 min",
      date: "Yesterday",
      progress: 60,
    },
    {
      id: 3,
      companion: "Dr. Amara",
      duration: "12 min",
      date: "2 days ago",
      progress: 80,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">
                Hello, Amara! 👋
              </h1>
              <p className="text-sm text-foreground/60">
                Ready to learn something new?
              </p>
            </div>
          </div>

          <Button
            onClick={() => setLocation("/")}
            variant="ghost"
            size="sm"
            className="text-foreground/70 hover:text-foreground"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 space-y-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/70 mb-1">
                  Total Minutes
                </p>
                <p className="text-3xl font-bold text-foreground">127</p>
              </div>
              <Clock className="w-12 h-12 text-primary/30" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/70 mb-1">
                  Sessions Completed
                </p>
                <p className="text-3xl font-bold text-foreground">28</p>
              </div>
              <Zap className="w-12 h-12 text-secondary/30" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/70 mb-1">Current Streak</p>
                <p className="text-3xl font-bold text-foreground">7 days</p>
              </div>
              <TrendingUp className="w-12 h-12 text-primary/30" />
            </div>
          </Card>
        </div>

        {/* Learning Companions */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Your Learning Companions
            </h2>
            <Button
              onClick={() => setLocation("/build-companion")}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Plus className="w-4 h-4" /> Create New
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companions.map((companion) => (
              <Card
                key={companion.id}
                onClick={() => setLocation("/voice-session")}
                className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-2 border-border"
              >
                <div className="space-y-4">
                  <div className="text-5xl">{companion.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {companion.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {companion.subject}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-foreground/60">
                      {companion.sessions} sessions completed
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* My Journey */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Journey</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-foreground border-border"
            >
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {sessions.map((session) => (
              <Card
                key={session.id}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {session.companion}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {session.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {session.duration}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${session.progress}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
