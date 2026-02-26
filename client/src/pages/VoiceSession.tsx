import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff, Volume2, Clock } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

/**
 * Voice Session Page for AfriVoice
 * Design Philosophy: Microphone-centric, real-time feedback, minimal distractions
 * Large interactive elements, clear voice state indicators
 */

export default function VoiceSession() {
  const [, setLocation] = useLocation();
  const [isListening, setIsListening] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Mock transcript
  const messages = [
    {
      id: 1,
      speaker: "user",
      text: "What is photosynthesis?",
      timestamp: "0:05",
    },
    {
      id: 2,
      speaker: "ai",
      text: "Photosynthesis is the process plants use to convert sunlight into chemical energy. It happens in the leaves and requires three things: sunlight, water, and carbon dioxide.",
      timestamp: "0:15",
    },
    {
      id: 3,
      speaker: "user",
      text: "Can you give me an example?",
      timestamp: "0:35",
    },
    {
      id: 4,
      speaker: "ai",
      text: "Of course! Think of a plant as a tiny factory. The sun is like electricity powering the factory. Water comes from the soil through the roots. Carbon dioxide comes from the air. Together, they create glucose, which is food for the plant.",
      timestamp: "0:50",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="ghost"
            size="sm"
            className="text-foreground/70 hover:text-foreground gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>

          <div className="text-center">
            <h1 className="font-bold text-lg text-foreground">Dr. Amara</h1>
            <p className="text-sm text-foreground/60">Science Tutor</p>
          </div>

          <div className="flex items-center gap-2 text-foreground/70">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">{formatTime(sessionTime)}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-8 flex flex-col gap-8">
        {/* Companion Avatar & Microphone Section */}
        <div className="flex flex-col items-center justify-center space-y-8 py-12">
          {/* Companion Avatar */}
          <div
            className={`w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-6xl transition-all ${
              isAISpeaking ? "scale-110 animate-pulse" : ""
            }`}
          >
            🔬
          </div>

          {/* AI Speaking Indicator */}
          {isAISpeaking && (
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-primary animate-bounce" />
              <span className="text-sm font-semibold text-primary">
                AI is speaking...
              </span>
            </div>
          )}

          {/* Large Microphone Button */}
          <button
            onClick={() => {
              setIsListening(!isListening);
              if (!isListening) {
                setTimeout(() => setIsAISpeaking(true), 1000);
                setTimeout(() => {
                  setIsAISpeaking(false);
                  setIsListening(false);
                }, 3000);
              }
            }}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
              isListening
                ? "bg-destructive text-destructive-foreground animate-pulse"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {isListening ? (
              <MicOff className="w-16 h-16" />
            ) : (
              <Mic className="w-16 h-16" />
            )}
          </button>

          {/* Status Text */}
          <p className="text-center text-foreground/70 font-semibold">
            {isListening
              ? "Listening... Tap to stop"
              : isAISpeaking
                ? "Dr. Amara is responding..."
                : "Tap the microphone to start talking"}
          </p>
        </div>

        {/* Transcript Panel */}
        <Card className="flex-1 p-6 bg-muted/30 border border-border overflow-hidden flex flex-col">
          <h3 className="font-bold text-foreground mb-4">Conversation</h3>

          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.speaker === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.speaker === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card border border-border text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.speaker === "user"
                        ? "text-primary-foreground/70"
                        : "text-foreground/50"
                    }`}
                  >
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {isAISpeaking && (
              <div className="flex justify-start">
                <div className="bg-card border border-border text-foreground px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* End Session Button */}
        <div className="flex gap-4">
          <Button
            onClick={() => setLocation("/session-summary")}
            variant="outline"
            className="flex-1 text-foreground border-border hover:bg-muted"
          >
            End Session
          </Button>
          <Button
            disabled={isListening || isAISpeaking}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Continue Learning
          </Button>
        </div>
      </main>
    </div>
  );
}
