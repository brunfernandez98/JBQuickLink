import { cn } from '@nextui-org/theme';

export const HighlightBlue = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-blue-100 text-blue-800 underline underline-offset-4 decoration-blue-500 transition duration-300 hover:bg-blue-200 hover:text-blue-900 px-1.5 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

export const CARDS = [
  {
    id: 0,
    name: 'Manu Arora',
    designation: 'Senior Software Engineer',
    content: (
      <blockquote className="text-neutral-900 relative">
        <span className="text-4xl text-blue-500 absolute -top-6 left-0">“</span>
        These URLs are so much cleaner,{' '}
        <HighlightBlue>I love using this tool</HighlightBlue> in my projects.
        Shortening URLs has never been this easy!
        <span className="text-4xl text-blue-500 absolute -bottom-6 right-0">
          ”
        </span>
      </blockquote>
    ),
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=100',
  },
  {
    id: 1,
    name: 'Jane Doe',
    designation: 'Digital Marketer',
    content: (
      <blockquote className="text-neutral-900 relative">
        <span className="text-4xl text-blue-500 absolute -top-6 left-0">“</span>
        Managing my campaigns is so much easier now.
        <HighlightBlue>Shortened URLs</HighlightBlue> look professional and help
        with <HighlightBlue>tracking clicks</HighlightBlue> more efficiently.
        <span className="text-4xl text-blue-500 absolute -bottom-6 right-0">
          ”
        </span>
      </blockquote>
    ),
    avatar:
      'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=500&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nJTIwZGlyZWN0b3J8ZW58MHx8MHx8fDI%3D',
  },
  {
    id: 2,
    name: 'Tyler Durden',
    designation: 'Manager Project Mayhem',
    content: (
      <blockquote className="text-neutral-900 relative">
        <span className="text-4xl text-blue-500 absolute -top-6 left-0">“</span>
        The first rule of using a <HighlightBlue>
          URL shortener
        </HighlightBlue>{' '}
        is that you don&apos;t talk about how easy it is. The second rule is{' '}
        <HighlightBlue>you DO NOT</HighlightBlue> talk about how easy it is.
        <span className="text-4xl text-blue-500 absolute -bottom-6 right-0">
          ”
        </span>
      </blockquote>
    ),
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
