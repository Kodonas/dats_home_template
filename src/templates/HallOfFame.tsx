type IHoFProps = {
  description: string;
};

const HallOfFame = (props: IHoFProps) => {
  // const router = useRouter();

  return (
    <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
      <div>
        <h2>Hall Of Fame</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export { HallOfFame };
