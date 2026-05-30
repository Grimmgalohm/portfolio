import React from 'react';
import { Typography } from '../atoms/Typography';
import { ManifestoItem } from '../molecules/ManifestoItem';

export const ManifestoSection: React.FC = () => {
  const manifestoItems = [
    {
      icon: 'bug_report',
      title: 'Testing is not optional',
      description: "TDD isn't just about verifying correctness; it's a design tool. High test coverage gives the confidence to refactor aggressively.",
    },
    {
      icon: 'visibility',
      title: 'Observability from day one',
      description: "If you can't measure it, you can't improve it. Logs, metrics, and distributed tracing are core infrastructure, not add-ons.",
    },
    {
      icon: 'inventory_2',
      title: 'Boring is better',
      description: 'I choose proven, stable technologies over hype. "Boring" tech allows us to focus our innovation tokens on the product, not the plumbing.',
    },
  ];

  const rules = [
    'Code is a liability, functionality is an asset.',
    'Premature optimization is the root of all evil.',
    'Clear documentation beats clever code.',
    'Security should be frictionless, or it will be bypassed.',
    'Automate everything that can be automated.',
  ];

  return (
    <section className="py-24 bg-background-card/30 border-y border-white/5 relative overflow-hidden" id="manifesto">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Typography variant="h2" className="mb-6">Software as a Craft</Typography>
            <Typography variant="p" className="mb-8 leading-relaxed">
              Writing code is the easy part. Building systems that survive organizational changes, traffic spikes, and shifting requirements is the real challenge.
            </Typography>
            <div className="space-y-8">
              {manifestoItems.map((item) => (
                <ManifestoItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-background-dark border border-white/10 rounded-xl p-8 shadow-2xl">
              <h4 className="font-mono text-sm text-primary mb-6 border-b border-white/10 pb-2">~/manifesto.md</h4>
              <ul className="space-y-4 font-mono text-sm text-text-muted">
                {rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✔</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
