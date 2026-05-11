interface Props {
  title: string;
  description: string;
}

export const StepHeader = ({ title, description }: Props) => {

  return (
    <header className="text-center space-y-2 pb-3">
      <h2 className="text-3xl md:text-4xl font-black text-primary font-heading">
        {title}
      </h2>
      <p className="text-primary/60 text-base md:text-lg font-medium">
        {description}
      </p>
    </header>
  )
};
