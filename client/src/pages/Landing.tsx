import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Users, Zap } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Landing Page for AfriVoice
 * Design Philosophy: Voice-first, warm, accessible, encouraging
 * Color Scheme: Teal (primary), Orange (secondary), Light backgrounds
 * Typography: Poppins for headings, Inter for body
 */

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Mic className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">AfriVoice</span>
          </div>
          <Button
            onClick={() => setLocation("/signin")}
            variant="outline"
            className="text-foreground border-border hover:bg-muted"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/RhadN3YuuEU0bRvD8cWlTB/sandbox/d1onMLlhjeJ5fc8FMhyfpn-img-1_1772114061000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmhhZE4zWXV1RVUwYlJ2RDhjV2xUQi9zYW5kYm94L2Qxb25NTGxoamVKNWZjOEZNaHlmcG4taW1nLTFfMTc3MjExNDA2MTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HakqiXb0h-y5yaksOfIQZDGjTK7JsD0cmrBjA57VIdPd2SrEj7AiRtYqQGtD5Xt4aNWhGOrJG4SRlZlb-3d3wCev3iiU1AWNiWEuYKvdxlsv9WIF8h9wvMjD~R9aMfkoWtuLG1yV4YAMngGYMiGMlEYcLjJvdAx7GwhpeOUpnp~nqmlMPezdCZ0N4K-dc4Lc6CPiVyy5wg0BCsOwvDbIXFDSoDPe84Iqgn1HQQzVjCxIkgnKj1pKYfgz1KtIoisTC~4BCi4FBbm-TTToC44Hab6zes6nQxWgmcl4qC0DIY2A66JIyo1YqdzwuxmFdi16LwovsZITYovPMHi2RQFgLQ__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Learn by Talking to AI
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                No typing required. Just talk to your personal AI tutor, available 24/7. Learn at your own pace, in your own language.
              </p>
            </div>

            <Button
              onClick={() => setLocation("/signup")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 h-14 px-8 text-base"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Hero Illustration */}
          <div className="hidden md:flex justify-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/RhadN3YuuEU0bRvD8cWlTB/sandbox/d1onMLlhjeJ5fc8FMhyfpn-img-2_1772114056000_na1fn_c3R1ZGVudC10YWxraW5nLWlsbHVzdHJhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmhhZE4zWXV1RVUwYlJ2RDhjV2xUQi9zYW5kYm94L2Qxb25NTGxoamVKNWZjOEZNaHlmcG4taW1nLTJfMTc3MjExNDA1NjAwMF9uYTFmbl9jM1IxWkdWdWRDMTBZV3hyYVc1bkxXbHNiSFZ6ZEhKaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=F-dniDhCF5TErbVFysotBq8KO5EtjBKXRAIE~uoQgImPjrhXxyzXRbsCgywBFX5sUhHCbDDKYkHklVeCXyb3bFcHQzjDaHY0vsMjAqQuBatTIO~tDBZb-FHUSpg1LtLQclP3wG~Jf1f8PwRNSbETxY53YHpPjwPW-zBTVOJSOPBD1OyAW-kNhYS0nVDhWrWQgxvelSdZn6nLt3PLeE9B42TmxzmRp-OG4ec7T-FwU2Z5zI7hFJ68LpOuRJ3HEG7JsLQs7XxFH0Ypwt71O2qOwOBeRMgvyu1zPJARgQyKx99fccAYmyhmV1w0JZNY27LcxKMuLG1aYkGTm0WhIozSPg__"
              alt="Student talking to AI"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose AfriVoice?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mic className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                No Typing Required
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Simply speak to learn. Perfect for students with limited reading and writing skills.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Available 24/7
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Your AI tutor is always ready. Learn whenever you want, wherever you are.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Personalized Learning
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Create your own AI tutor or choose from existing companions. Learn your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/RhadN3YuuEU0bRvD8cWlTB/sandbox/d1onMLlhjeJ5fc8FMhyfpn_1772114061672_na1fn_aG93LWl0LXdvcmtzLWljb24tMQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmhhZE4zWXV1RVUwYlJ2RDhjV2xUQi9zYW5kYm94L2Qxb25NTGxoamVKNWZjOEZNaHlmcG5fMTc3MjExNDA2MTY3Ml9uYTFmbl9hRzkzTFdsMExYZHZjbXR6TFdsamIyNHRNUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VwHN-h2dSTNvmo9~byZMrc0TtXXfnI-SzpLz5GwixQEbkFB6oDQ-EfkHX0h62ciSAPkW0q3UoyNn1f8HcLc6WKIWOlR~Whsjo4u3ZpK1id2aDw6gavmmygWBPJYguNPZkw0h~LRgBQIoiSO6rc1N8Q3Am7~OgAqHuLZe-TxFmkTmeTrbYHEkjauEf4UiuOEFwFOkikWP0H2ZYc55UMTXxZNEtmQPGQUkN1neMcnkHjujpW7E0GxXd0cgrF7kn466hsF4SrWH28XRGau2wx7-jHiNBpd81HqTTZBetq4j76uQXDKfZ5L~KUyVJl3A~YTnfT12M2IBewXFyZ6mWMk0kA__"
                  alt="Sign Up"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Sign Up</h3>
              <p className="text-sm text-foreground/70">
                Create your account in seconds
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/RhadN3YuuEU0bRvD8cWlTB/sandbox/d1onMLlhjeJ5fc8FMhyfpn_1772114061673_na1fn_aG93LWl0LXdvcmtzLWljb24tMg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmhhZE4zWXV1RVUwYlJ2RDhjV2xUQi9zYW5kYm94L2Qxb25NTGxoamVKNWZjOEZNaHlmcG5fMTc3MjExNDA2MTY3M19uYTFmbl9hRzkzTFdsMExYZHZjbXR6TFdsamIyNHRNZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B8f8wNEFoTwJ7hxlDI9OzAnr4g6nhwaCgZSxbWHBzz5kfYmB5FLrkOtBO7q0WYZ2BTrjBLBeyoopdP3597vhCTCu6wtLeTFmhpvBKmJLhLtKQ5yfPaQ7bAgjh9Mvns~-kT2UTBCNHqtZgdjZ~y5u~W~KAJ7UL8bP5KJx3hsqlVfWRQ92Kz9alvJPbQKWcZorAoZSZuYAV96ksDS6D3JGDDA~wD0~kIK5T0xeXWQvUx~IjPDcntDGJjzZH7Nvcqy4WcOnLi73W9l5sb4F8jqYQV-dggB8uTJeU27HUTNu2hNpz~1N6K4veAt31ApbhkLuv-zqzadyDQX4TdB5QlMN4Q__"
                  alt="Choose Companion"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Choose Companion
              </h3>
              <p className="text-sm text-foreground/70">
                Pick an AI tutor or create your own
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/RhadN3YuuEU0bRvD8cWlTB/sandbox/d1onMLlhjeJ5fc8FMhyfpn_1772114061673_na1fn_aG93LWl0LXdvcmtzLWljb24tMw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmhhZE4zWXV1RVUwYlJ2RDhjV2xUQi9zYW5kYm94L2Qxb25NTGxoamVKNWZjOEZNaHlmcG5fMTc3MjExNDA2MTY3M19uYTFmbl9hRzkzTFdsMExYZHZjbXR6TFdsamIyNHRNdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U2Ew6nyvFSAXGLkM-bw4zc4Bm0PIXNlXIK-PRGcOivIp815Tjzk~~1xIwmMaYS0tD0GNNBHcyqeHQsV3IqStSSYeASyRht1CzXJ3m-ZM8MGZYj6FyZFMoiTfm2hMkW6iPMufDJZ-h8IWbKuJhwaXpIZXl12dAnyHPL-vIcDtDIB0WNwmKI9o9EV2k9R3hL87tLlkzidefceVOloZwyensQmp5rWra60DMtGI~~sPpMoBQPnomT1BbjePswPy4LaUT1q9BIirnHjRO1aKkc7Um2xe6dwfoDtbiS5xTaCgK0PXGV0kGfdEi-6mqEc6ddPOV30jAJJTSUhGWcrLYld5sg__"
                  alt="Talk & Learn"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Talk & Learn
              </h3>
              <p className="text-sm text-foreground/70">
                Start a voice conversation
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Track Progress
              </h3>
              <p className="text-sm text-foreground/70">
                See your learning journey grow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Learning?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of students across Africa who are learning with AfriVoice.
          </p>
          <Button
            onClick={() => setLocation("/signup")}
            size="lg"
            variant="secondary"
            className="font-semibold gap-2 h-14 px-8 text-base"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">AfriVoice</span>
              </div>
              <p className="text-sm text-foreground/70">
                Learn by talking to AI
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 AfriVoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
