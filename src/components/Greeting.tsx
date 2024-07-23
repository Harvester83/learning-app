interface GreetingProps {	
  greeting: string
}


const Greeting = (props: GreetingProps) => {

  const { greeting } = props


  return (
    <div>
      <h1>Greeting, {greeting}</h1>
    </div>
  );
}


export default Greeting;
