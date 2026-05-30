import React from 'react';
import { Badge } from '../atoms/Badge';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate pt-14 lg:pt-32 pb-24 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 max-w-2xl">
          <Badge dot className="mb-6">
            Available for Hire
          </Badge>
          <Typography variant="h1" className="mb-6">
            Building Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">Software</span>
          </Typography>
          <Typography variant="p" className="mb-8 max-w-xl">
            Senior Full-Stack Engineer specializing in scalable architecture, distributed systems, and clean code principles. I solve hard problems with boring technology.
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" as="a" href="#projects">
              View Projects
            </Button>
            <Button variant="secondary" as="a" href="#manifesto">
              Read Philosophy
            </Button>
          </div>
        </div>
        
        {/* Decorative Code Window */}
        <div className="hidden lg:block flex-1 w-full max-w-xl">
          <div className="relative rounded-xl bg-background-card border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-text-muted">architecture.ts</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed text-blue-200">
                <span className="text-purple-400">interface</span> <span className="text-yellow-200">SystemArchitecture</span> {'{\n'}
                {'  '}<span className="text-primary">scalability</span>: <span className="text-orange-300">'horizontal'</span> | <span className="text-orange-300">'vertical'</span>;{'\n'}
                {'  '}<span className="text-primary">reliability</span>: <span className="text-green-300">number</span>; <span className="text-text-muted">// 99.99%</span>{'\n'}
                {'  '}<span className="text-primary">maintainability</span>: <span className="text-purple-400">boolean</span>;{'\n'}
                {'}'}{'\n\n'}
                <span className="text-purple-400">const</span> <span className="text-blue-300">buildSystem</span> = (<span className="text-primary">specs</span>: SystemArchitecture) =&gt; {'{\n'}
                {'  '}<span className="text-text-muted">// Prioritize simplicity over complexity</span>{'\n'}
                {'  '}<span className="text-purple-400">if</span> (!specs.maintainability) {'{\n'}
                {'    '}<span className="text-purple-400">throw new</span> <span className="text-yellow-200">Error</span>(<span className="text-orange-300">"Technical Debt Detected"</span>);{'\n'}
                {'  '}{'}\n'}
                {'  '}<span className="text-purple-400">return</span> <span className="text-green-300">true</span>;{'\n'}
                {'}'};
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
