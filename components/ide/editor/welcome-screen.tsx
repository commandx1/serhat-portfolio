interface WelcomeScreenProps {
  onOpenFile: (fileId: string) => void
}

const WelcomeCard = ({
  title,
  description,
  onClick,
}: {
  title: string
  description: string
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className='p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-left group'
  >
    <p className='font-mono text-sm text-primary group-hover:text-foreground transition-colors'>{title}</p>
    <p className='text-xs text-muted-foreground mt-1'>{description}</p>
  </button>
)

export const WelcomeScreen = ({ onOpenFile }: WelcomeScreenProps) => {
  return (
    <div className='h-full flex flex-col items-center justify-center p-8 text-center overflow-auto'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold text-foreground mb-2'>Serhat Belen</h1>
        <p className='text-xl text-primary mb-8'>Full Stack Developer</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
          <WelcomeCard
            title='README.md'
            description='IDE Simulation Guide'
            onClick={() => onOpenFile('readme')}
          />
          <WelcomeCard
            title='OZGECMIS.md'
            description='Türkçe Overview & Introduction'
            onClick={() => onOpenFile('ozgecmis')}
          />
          <WelcomeCard
            title='RESUME.md'
            description='English Overview & Introduction'
            onClick={() => onOpenFile('resume')}
          />
        </div>

        <div className='text-muted-foreground text-sm'>
          <p>Click on files in the sidebar or use the cards above to explore</p>
          {/* <p className='mt-2'>
            Press <kbd className='px-2 py-0.5 bg-muted rounded text-xs'>Ctrl+P</kbd> to quick open files
          </p> */}
        </div>

        <div className='mt-8 flex justify-center gap-4 text-sm'>
          <a href='https://github.com/commandx1' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>
            GitHub
          </a>
          <span className='text-muted-foreground'>•</span>
          <a
            href='https://linkedin.com/in/serhat-belen'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary hover:underline'
          >
            LinkedIn
          </a>
          <span className='text-muted-foreground'>•</span>
          <a href='mailto:serhatbelen7@gmail.com' className='text-primary hover:underline'>
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
