'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('tools')

  return (
    <div className="container">
      <div className="header">
        <h1>🎬 Story Creator Guide</h1>
        <p>Your AI filmmaking assistant - Free tools, smart strategies, story-first approach</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          🛠️ Free Tools
        </button>
        <button
          className={`tab ${activeTab === 'consistency' ? 'active' : ''}`}
          onClick={() => setActiveTab('consistency')}
        >
          🎯 Consistency Strategies
        </button>
        <button
          className={`tab ${activeTab === 'time' ? 'active' : ''}`}
          onClick={() => setActiveTab('time')}
        >
          ⏱️ Time Management
        </button>
        <button
          className={`tab ${activeTab === 'contingency' ? 'active' : ''}`}
          onClick={() => setActiveTab('contingency')}
        >
          🆘 Contingency Plans
        </button>
        <button
          className={`tab ${activeTab === 'principles' ? 'active' : ''}`}
          onClick={() => setActiveTab('principles')}
        >
          💡 Core Principles
        </button>
      </div>

      {activeTab === 'tools' && (
        <div>
          <div className="section">
            <h2>Free AI Tools for Filmmaking</h2>
            <p>Start with these free options before considering paid alternatives</p>

            <div className="tool-list">
              <div className="tool-item">
                <div className="tool-header">
                  <span className="tool-name">Leonardo.ai</span>
                  <span className="badge free">FREE</span>
                </div>
                <p><strong>Best for:</strong> Image generation with good consistency features</p>
                <p><strong>Free tier:</strong> 150 tokens/day</p>
                <p><strong>Workarounds:</strong> Use Image2Image mode, batch generate multiple variations, use reference images</p>
              </div>

              <div className="tool-item">
                <div className="tool-header">
                  <span className="tool-name">Stable Diffusion (via Google Colab)</span>
                  <span className="badge free">FREE</span>
                </div>
                <p><strong>Best for:</strong> Unlimited generation if you set it up yourself</p>
                <p><strong>Free tier:</strong> Unlimited with GPU runtime limits</p>
                <p><strong>Workarounds:</strong> Multiple accounts, restart sessions, use CPU for light tasks</p>
              </div>

              <div className="tool-item">
                <div className="tool-header">
                  <span className="tool-name">RunwayML Gen-2</span>
                  <span className="badge free">FREE</span>
                </div>
                <p><strong>Best for:</strong> Video generation from images/text</p>
                <p><strong>Free tier:</strong> 125 credits (5-10 seconds of video)</p>
                <p><strong>Workarounds:</strong> Generate only key shots, use still frames for transitions</p>
              </div>

              <div className="tool-item">
                <div className="tool-header">
                  <span className="tool-name">Pika Labs</span>
                  <span className="badge free">FREE</span>
                </div>
                <p><strong>Best for:</strong> Alternative video generation</p>
                <p><strong>Free tier:</strong> Limited generations via Discord</p>
                <p><strong>Workarounds:</strong> Use for specific shots, combine with other tools</p>
              </div>

              <div className="tool-item">
                <div className="tool-header">
                  <span className="tool-name">DaVinci Resolve</span>
                  <span className="badge free">FREE</span>
                </div>
                <p><strong>Best for:</strong> Professional video editing</p>
                <p><strong>Free tier:</strong> Full featured (paid version adds minor features)</p>
                <p><strong>Why it matters:</strong> Polish your AI-generated content to professional quality</p>
              </div>

              <div className="tool-item">
                <div className="tool-header">
                  <span className="tool-name">ElevenLabs</span>
                  <span className="badge free">FREE</span>
                </div>
                <p><strong>Best for:</strong> AI voice generation</p>
                <p><strong>Free tier:</strong> 10,000 characters/month</p>
                <p><strong>Workarounds:</strong> Write tight scripts, use for key narration only</p>
              </div>
            </div>

            <div className="alert info">
              <strong>💡 Tool-Switching Strategy:</strong> Use multiple free accounts across different tools. Generate backgrounds in Leonardo, characters in Stable Diffusion, animate in RunwayML. This maximizes free tiers.
            </div>
          </div>

          <div className="section">
            <h2>Paid Options (If Budget Allows)</h2>
            <div className="card-grid">
              <div className="card">
                <h4>Midjourney</h4>
                <span className="badge paid">$10-60/mo</span>
                <p>Best image quality and consistency. Worth it if you need professional results and have budget.</p>
              </div>
              <div className="card">
                <h4>RunwayML Pro</h4>
                <span className="badge paid">$15-95/mo</span>
                <p>Unlimited video generation. Consider if video is central to your project.</p>
              </div>
              <div className="card">
                <h4>Adobe Creative Cloud</h4>
                <span className="badge paid">$60/mo</span>
                <p>Industry standard tools. Only if you need advanced editing features beyond DaVinci.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'consistency' && (
        <div>
          <div className="section">
            <h2>Character & Scene Consistency Strategies</h2>

            <div className="alert warning">
              <strong>⚠️ Reality Check:</strong> 100% perfect AI consistency is currently impossible. Even paid tools struggle. Plan for hybrid approaches and accept some variation.
            </div>

            <h3>Strategy 1: Reference Images</h3>
            <div className="interactive-section">
              <p><strong>How it works:</strong> Generate one "hero" image of your character, then use it as reference for all future generations.</p>
              <ul className="checklist">
                <li>Generate 10-20 variations of your character</li>
                <li>Pick the best one as your "reference sheet"</li>
                <li>Use image-to-image mode with this reference (weight: 0.6-0.8)</li>
                <li>Keep the same prompt structure for all shots</li>
              </ul>
              <p><strong>Success rate:</strong> 60-70% consistency</p>
            </div>

            <h3>Strategy 2: ControlNet (Advanced)</h3>
            <div className="interactive-section">
              <p><strong>How it works:</strong> Use pose/depth maps to control character positioning while maintaining appearance.</p>
              <ul className="checklist">
                <li>Take photos/videos of yourself in desired poses</li>
                <li>Extract pose/depth maps using OpenPose or MiDaS</li>
                <li>Use as conditioning input in Stable Diffusion</li>
                <li>Combine with reference images for best results</li>
              </ul>
              <p><strong>Success rate:</strong> 70-80% consistency</p>
              <p><strong>Learning curve:</strong> 2-3 hours to set up, worth it for multiple characters</p>
            </div>

            <h3>Strategy 3: Manual Fixes (The Reality)</h3>
            <div className="interactive-section">
              <p><strong>Embrace hybrid workflow:</strong> AI gets you 80% there, manual fixes complete it.</p>
              <ul className="checklist">
                <li>Use AI for initial generation</li>
                <li>Fix inconsistencies in Photoshop/GIMP (free)</li>
                <li>Use Photoshop's Neural Filters for quick touch-ups</li>
                <li>Composite multiple AI generations for perfect shot</li>
              </ul>
              <p><strong>Time investment:</strong> 5-15 min per critical shot</p>
              <div className="alert success">
                <strong>✓ Recommended:</strong> This hybrid approach gives the best results. Focus manual work on close-ups and important emotional beats.
              </div>
            </div>

            <h3>Strategy 4: Work Around Limitations</h3>
            <div className="card-grid">
              <div className="card">
                <h4>Camera Angles</h4>
                <p>Use angles that hide inconsistencies: over-the-shoulder, silhouettes, distance shots</p>
              </div>
              <div className="card">
                <h4>Lighting & Effects</h4>
                <p>Low light, fog, motion blur naturally mask variations between shots</p>
              </div>
              <div className="card">
                <h4>Quick Cuts</h4>
                <p>Fast-paced editing makes small inconsistencies less noticeable</p>
              </div>
              <div className="card">
                <h4>Costume Changes</h4>
                <p>Build "inconsistency" into the story - different outfits per scene</p>
              </div>
            </div>

            <h3>Batch Processing Techniques</h3>
            <div className="interactive-section">
              <p><strong>Generate smarter, not harder:</strong></p>
              <ol>
                <li>Generate all shots for one character/scene in a single session</li>
                <li>Use the same seed + prompt variations</li>
                <li>Create a "style guide" document with exact prompts that worked</li>
                <li>Test consistency early - generate 3 shots before doing 30</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'time' && (
        <div>
          <div className="section">
            <h2>Time Management for AI Filmmaking</h2>
            <p>Your time is precious. Here's how to prioritize and move fast.</p>

            <div className="principle-box">
              <h3>🎯 The 80/20 Rule</h3>
              <p>80% of emotional impact comes from 20% of your shots. Identify and focus on those.</p>
            </div>

            <h3>Shot Priority Framework</h3>
            <div className="card-grid">
              <div className="card">
                <h4>🔴 CRITICAL (Polish heavily)</h4>
                <ul>
                  <li>Character emotional close-ups</li>
                  <li>Story-pivoting moments</li>
                  <li>Opening and closing shots</li>
                  <li>Any shot on screen &gt;5 seconds</li>
                </ul>
                <p><strong>Time allocation:</strong> 60% of your effort</p>
              </div>
              <div className="card">
                <h4>🟡 IMPORTANT (Get it good)</h4>
                <ul>
                  <li>Establishing shots</li>
                  <li>Action sequences</li>
                  <li>Character introductions</li>
                  <li>Shots 2-5 seconds</li>
                </ul>
                <p><strong>Time allocation:</strong> 30% of your effort</p>
              </div>
              <div className="card">
                <h4>🟢 FILLER (Quick & dirty)</h4>
                <ul>
                  <li>Transitions</li>
                  <li>B-roll</li>
                  <li>Background shots</li>
                  <li>Shots &lt;2 seconds</li>
                </ul>
                <p><strong>Time allocation:</strong> 10% of your effort</p>
              </div>
            </div>

            <h3>Fast Track vs Quality Track</h3>
            <div className="interactive-section">
              <h4>⚡ Fast Track (1-2 weeks for short film)</h4>
              <ol>
                <li><span className="step-number">1</span>Write tight 2-3 minute script (1 day)</li>
                <li><span className="step-number">2</span>Storyboard only key shots - 10-15 total (1 day)</li>
                <li><span className="step-number">3</span>Batch generate all images (2 days)</li>
                <li><span className="step-number">4</span>Accept first "good enough" results (no perfectionism)</li>
                <li><span className="step-number">5</span>Animate only 3-5 critical shots (2 days)</li>
                <li><span className="step-number">6</span>Use stills for everything else</li>
                <li><span className="step-number">7</span>Quick edit in DaVinci (2 days)</li>
                <li><span className="step-number">8</span>Ship it!</li>
              </ol>
              <div className="alert info">
                <strong>Result:</strong> Complete but rough short film. Perfect for learning, testing ideas, or rapid iteration.
              </div>
            </div>

            <div className="interactive-section">
              <h4>💎 Quality Track (1-2 months for short film)</h4>
              <ol>
                <li><span className="step-number">1</span>Develop detailed script with emotional beats (1 week)</li>
                <li><span className="step-number">2</span>Create comprehensive storyboard - 30-50 shots (1 week)</li>
                <li><span className="step-number">3</span>Generate character reference sheets (3 days)</li>
                <li><span className="step-number">4</span>Generate all images with consistency checks (1 week)</li>
                <li><span className="step-number">5</span>Manual touch-ups on critical shots (1 week)</li>
                <li><span className="step-number">6</span>Animate 15-20 shots (2 weeks)</li>
                <li><span className="step-number">7</span>Professional editing + color grading (1 week)</li>
                <li><span className="step-number">8</span>Sound design + music (3 days)</li>
                <li><span className="step-number">9</span>Final polish + feedback rounds (3 days)</li>
              </ol>
              <div className="alert success">
                <strong>Result:</strong> Portfolio-quality piece ready for festivals or professional presentation.
              </div>
            </div>

            <h3>When to Cut Shots</h3>
            <div className="alert warning">
              <strong>Timeline tight? Here's what to sacrifice first:</strong>
              <ol>
                <li>Complex camera movements - use static shots</li>
                <li>Crowd scenes - reduce to 1-2 characters</li>
                <li>Location variety - reuse backgrounds</li>
                <li>Lengthy dialogue - let visuals tell the story</li>
                <li>Perfection - done is better than perfect</li>
              </ol>
            </div>

            <h3>Time-Saving Pro Tips</h3>
            <div className="card-grid">
              <div className="card">
                <h4>Parallel Processing</h4>
                <p>Generate images overnight, edit while renders run, write while AI processes</p>
              </div>
              <div className="card">
                <h4>Reuse Assets</h4>
                <p>One good background = 10 shots. Mirror/flip images for new angles</p>
              </div>
              <div className="card">
                <h4>Template Prompts</h4>
                <p>Save working prompts. Swap character/action for instant variations</p>
              </div>
              <div className="card">
                <h4>Ken Burns Effect</h4>
                <p>Pan/zoom on still images = cheap "video" that looks professional</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contingency' && (
        <div>
          <div className="section">
            <h2>🆘 Contingency Planning - When Things Go Wrong</h2>
            <p>Tools fail, results disappoint, deadlines loom. Here's your survival guide.</p>

            <h3>Problem 1: Tool Stops Working / Rate Limited</h3>
            <div className="interactive-section">
              <h4>Immediate Actions:</h4>
              <ul className="checklist">
                <li>Switch to backup tool from your free tools list</li>
                <li>Create new account with different email (temp-mail.org)</li>
                <li>Use mobile data / VPN if IP banned</li>
                <li>Move to Google Colab if platform tools fail</li>
              </ul>
              <h4>Prevention:</h4>
              <p>Never rely on a single tool. Have 2-3 alternatives tested and ready for each task (image gen, video gen, editing).</p>
              <div className="alert info">
                <strong>Backup Stack:</strong> Primary (Leonardo) → Secondary (Stable Diffusion) → Emergency (Bing Image Creator)
              </div>
            </div>

            <h3>Problem 2: Can't Achieve Character Consistency</h3>
            <div className="interactive-section">
              <h4>Alternative Approaches:</h4>
              <div className="card-grid">
                <div className="card">
                  <h4>Plan A: Embrace It</h4>
                  <p>Make it part of the story - dreamlike, memory-based narrative, anthology format</p>
                </div>
                <div className="card">
                  <h4>Plan B: Stylize Heavily</h4>
                  <p>Use heavy filters, silhouettes, abstract style where consistency matters less</p>
                </div>
                <div className="card">
                  <h4>Plan C: Minimize Character</h4>
                  <p>Focus on environments, objects, narration. Character appears briefly</p>
                </div>
                <div className="card">
                  <h4>Plan D: Rotoscope</h4>
                  <p>Film yourself, use AI to stylize each frame. Guaranteed consistency</p>
                </div>
              </div>
            </div>

            <h3>Problem 3: Results Look Bad / Not What You Want</h3>
            <div className="interactive-section">
              <h4>Salvage Operations:</h4>
              <ol>
                <li><strong>Don't throw away:</strong> Bad results can become backgrounds, blur effects, B-roll</li>
                <li><strong>Composite layers:</strong> Combine good parts from multiple generations</li>
                <li><strong>Embrace imperfection:</strong> Add VHS effect, grain, glitch - call it "style"</li>
                <li><strong>Reframe the shot:</strong> Crop, zoom, change what you planned to show</li>
                <li><strong>Cover with effects:</strong> Particles, light leaks, text overlays</li>
              </ol>
              <div className="alert success">
                <strong>Real talk:</strong> Many successful AI films use "happy accidents" and lean into the AI aesthetic rather than fighting it.
              </div>
            </div>

            <h3>Problem 4: Running Out of Time</h3>
            <div className="interactive-section">
              <h4>Emergency Timeline Cuts:</h4>
              <div className="alert danger">
                <strong>24 Hours to Deadline:</strong>
                <ul>
                  <li>Cut runtime by 50% - ruthlessly trim scenes</li>
                  <li>Convert remaining animations to still images with Ken Burns</li>
                  <li>Use text cards for transitions instead of generated shots</li>
                  <li>Focus all remaining time on audio - good sound masks visual issues</li>
                  <li>Add "experimental film" in description - embrace the rough aesthetic</li>
                </ul>
              </div>
              <div className="alert warning">
                <strong>1 Week to Deadline:</strong>
                <ul>
                  <li>Identify your 5 best shots - polish only those</li>
                  <li>Use those 5 shots multiple times from different angles</li>
                  <li>Quick generate filler content - accept first good result</li>
                  <li>Simplify story to what you can realistically show</li>
                </ul>
              </div>
            </div>

            <h3>Problem 5: Technical Skill Gaps</h3>
            <div className="interactive-section">
              <h4>When You're Stuck:</h4>
              <ol>
                <li><strong>YouTube University:</strong> Search "[problem] tutorial 2024" - someone has solved it</li>
                <li><strong>Discord Communities:</strong>
                  <ul>
                    <li>Stable Diffusion Discord</li>
                    <li>Midjourney Discord</li>
                    <li>r/StableDiffusion subreddit</li>
                    <li>AI Film Community on Reddit</li>
                  </ul>
                </li>
                <li><strong>Ask the Right Way:</strong> Share what you've tried, specific error messages, examples of desired output</li>
                <li><strong>Trade Skills:</strong> Offer something (writing, feedback) in exchange for help</li>
              </ol>
              <div className="alert info">
                <strong>Golden Rule:</strong> Search first, ask second. 90% of "unique" problems have documented solutions.
              </div>
            </div>

            <h3>Salvaging Partial Failures</h3>
            <div className="card-grid">
              <div className="card">
                <h4>Failed Character Shot</h4>
                <p><strong>Salvage:</strong> Use as POV shot, obscure face, convert to silhouette, or use for distant/background character</p>
              </div>
              <div className="card">
                <h4>Wonky Hands/Anatomy</h4>
                <p><strong>Salvage:</strong> Crop tighter, add motion blur, obscure with objects, inpaint fixes, or frame it out</p>
              </div>
              <div className="card">
                <h4>Wrong Composition</h4>
                <p><strong>Salvage:</strong> Extend with outpainting, creative cropping, use as insert shot, or make it a "glitch" moment</p>
              </div>
              <div className="card">
                <h4>Failed Animation</h4>
                <p><strong>Salvage:</strong> Use first frame as still, apply different effect, cut it shorter, or overlay with heavy effects</p>
              </div>
            </div>

            <h3>The Nuclear Option: Pivot Your Project</h3>
            <div className="alert warning">
              <strong>When all else fails, change what you're making:</strong>
              <ul>
                <li><strong>Narrative → Abstract:</strong> Turn failed realism into experimental art piece</li>
                <li><strong>Live Action → Animation:</strong> Lean into the AI aesthetic fully</li>
                <li><strong>Short Film → Photo Story:</strong> Still images + text + music can be powerful</li>
                <li><strong>Fiction → Documentary:</strong> Document your AI creation process itself</li>
                <li><strong>Solo → Collaboration:</strong> Find someone with complementary skills</li>
              </ul>
            </div>

            <h3>When to Ask for Community Help</h3>
            <div className="interactive-section">
              <p><strong>Ask the community when:</strong></p>
              <ul className="checklist">
                <li>You've tried 3+ approaches and documented what didn't work</li>
                <li>You have a specific technical question, not "how do I make a film?"</li>
                <li>You can share examples/screenshots of your issue</li>
                <li>You're willing to engage with responses and try suggestions</li>
                <li>You have time to wait (communities aren't instant support)</li>
              </ul>
              <p><strong>Don't ask when:</strong></p>
              <ul>
                <li>❌ "Do this for me" requests</li>
                <li>❌ Deadline is in &lt;24 hours (too late!)</li>
                <li>❌ Haven't googled/searched first</li>
                <li>❌ Asking for someone to troubleshoot your unique custom setup</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'principles' && (
        <div>
          <div className="section">
            <h2>💡 Core Principles for AI Filmmaking</h2>
            <p>The philosophy behind smart, successful AI film creation</p>

            <div className="principle-box">
              <h3>1. 🎭 Story Over Perfection</h3>
              <p><strong>A compelling story with rough visuals beats a beautiful empty film every time.</strong></p>
              <ul>
                <li>Emotional beats matter more than perfect character consistency</li>
                <li>Audience forgives visual inconsistencies if they're engaged</li>
                <li>Focus polish on moments of high emotional impact</li>
                <li>Watch early cinema - storytelling thrived before perfect VFX</li>
              </ul>
              <div className="alert success">
                <strong>Remember:</strong> Nobody leaves a film saying "The character's hair was consistent!" They remember how it made them feel.
              </div>
            </div>

            <div className="principle-box">
              <h3>2. 🔄 Consistency is Hard - Plan Accordingly</h3>
              <p><strong>Current AI cannot guarantee 100% character consistency. Accept this and adapt.</strong></p>
              <ul>
                <li>Hybrid approach (AI + manual) gives best results</li>
                <li>Work with AI's strengths, not against its limitations</li>
                <li>Use reference images, but expect 70-80% consistency at best</li>
                <li>Build your story around what AI can reliably do</li>
              </ul>
              <div className="interactive-section">
                <h4>Practical Applications:</h4>
                <ul>
                  <li>Design characters with distinctive features (not subtle differences)</li>
                  <li>Use costumes, props, color schemes as consistency anchors</li>
                  <li>Plan shots that don't require frame-perfect character matching</li>
                  <li>Embrace stylized/abstract approaches where consistency matters less</li>
                </ul>
              </div>
            </div>

            <div className="principle-box">
              <h3>3. ⏱️ Time is Your Most Precious Resource</h3>
              <p><strong>Optimize for impact per hour spent, not perfection.</strong></p>
              <ul>
                <li>Prioritize ruthlessly - not all shots deserve equal effort</li>
                <li>The 80/20 rule: 80% of impact comes from 20% of shots</li>
                <li>Done beats perfect when deadlines matter</li>
                <li>Fast iteration teaches more than slow perfection</li>
              </ul>
              <div className="card-grid">
                <div className="card">
                  <h4>High Impact/Hour</h4>
                  <span className="badge fast">FAST</span>
                  <ul>
                    <li>Tight script</li>
                    <li>Good audio</li>
                    <li>Emotional key shots</li>
                    <li>Effective editing</li>
                  </ul>
                </div>
                <div className="card">
                  <h4>Low Impact/Hour</h4>
                  <span className="badge quality">SLOW</span>
                  <ul>
                    <li>Perfect consistency</li>
                    <li>Complex scenes</li>
                    <li>Background details</li>
                    <li>Quick transition shots</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="principle-box">
              <h3>4. 💰 Free Tools First</h3>
              <p><strong>Master free tools before spending money. They're more capable than you think.</strong></p>
              <ul>
                <li>Free tier limitations force creative solutions</li>
                <li>Most successful AI films started with $0 budget</li>
                <li>Skills matter more than tool budgets</li>
                <li>Paid tools won't fix fundamental story/skill issues</li>
              </ul>
              <div className="interactive-section">
                <h4>When Free Tools Are Enough:</h4>
                <ul className="checklist">
                  <li>Learning and experimentation phase</li>
                  <li>Short films under 5 minutes</li>
                  <li>Personal/portfolio projects</li>
                  <li>Testing concepts before client work</li>
                </ul>
                <h4>When to Consider Paid:</h4>
                <ul className="checklist">
                  <li>Client work with specific quality requirements</li>
                  <li>Time-sensitive professional projects</li>
                  <li>After you've maxed out free tools' capabilities</li>
                  <li>When cost per hour saved makes sense</li>
                </ul>
              </div>
            </div>

            <div className="principle-box">
              <h3>5. 🔧 Embrace the Hybrid Workflow</h3>
              <p><strong>AI + Human = Best Results. Neither alone is optimal.</strong></p>
              <ul>
                <li>AI handles the heavy lifting (generation)</li>
                <li>Humans handle the finesse (selection, editing, fixes)</li>
                <li>Manual touch-ups on critical shots are expected, not failure</li>
                <li>The goal is efficiency, not pure AI output</li>
              </ul>
              <div className="alert info">
                <strong>Mindset Shift:</strong> You're not "cheating" by manually fixing AI outputs. You're using AI as a powerful tool in your creative arsenal, just like any other software.
              </div>
            </div>

            <div className="principle-box">
              <h3>6. 🎯 Iteration Beats Perfection</h3>
              <p><strong>Make three okay films rather than obsessing over one perfect film.</strong></p>
              <ul>
                <li>You learn more from completing projects than perfecting one</li>
                <li>Each project teaches what to do differently next time</li>
                <li>Your first film will have issues - accept it and finish</li>
                <li>Audience judges the final package, not individual elements</li>
              </ul>
              <div className="interactive-section">
                <h4>The Filmmaking Cycle:</h4>
                <ol>
                  <li>Make something (even if imperfect)</li>
                  <li>Ship it / Share it</li>
                  <li>Gather feedback</li>
                  <li>Learn what worked/didn't</li>
                  <li>Start next project with that knowledge</li>
                </ol>
                <p><strong>After 3 complete projects, you'll be better than 90% of people still perfecting their first.</strong></p>
              </div>
            </div>

            <h3>🎬 The Ultimate Principle</h3>
            <div className="alert success" style={{ fontSize: '1.1rem', padding: '24px' }}>
              <strong style={{ fontSize: '1.3rem' }}>Make the film you CAN make, not the film you wish you could make.</strong>
              <p style={{ marginTop: '12px' }}>Work within your constraints. Your limitations breed creativity. A finished imperfect film beats an unfinished masterpiece.</p>
            </div>
          </div>
        </div>
      )}

      <div className="section" style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Ready to Create?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '24px' }}>
          Start with free tools, focus on story, and ship your first project. You've got this! 🚀
        </p>
        <div className="alert info">
          <strong>Quick Start Path:</strong>
          <ol style={{ textAlign: 'left', marginTop: '12px' }}>
            <li>Write a tight 2-minute script (today)</li>
            <li>Sign up for Leonardo.ai + DaVinci Resolve (today)</li>
            <li>Generate 10-15 key images (tomorrow)</li>
            <li>Edit together with audio (weekend)</li>
            <li>Share your first AI film! 🎉</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
