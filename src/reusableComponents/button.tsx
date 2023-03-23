const Button = () => {
  const handleClick = (search: string) => {
    document.write(search);
  };

  return (
    <>
      <button onClick={() => handleClick('Search')}>Click here</button>
    </>
  );
};

export default Button;
