const Stringassignment = () => {
  const Home = "Yengal veetil yellam naalum kaarthigai";
  const Name = "Seeman";
  const Course = "Paatu Katcheri";
  const Details = "Six month Course Nalla Paadalaam"
  const Movie = "palaya padam";
  const Patname = "Rani Mangamma Parameswari"
  const Useraddress = "No: 123, ABC Street, Chennai - 600001"

  return (
    <>
      <h1>{Home}</h1>
      <p>indha paadalai paadiyavar ungal {Name}</p>
      <p>indha course {Course} la irukku</p>
      <h1>{Details}</h1>
      <h3> Iindha Movie Oda peru is {Movie}</h3>
      <h2>Indha  patname {Patname}</h2>
      <h4>Indha user oda address {Useraddress}</h4>
      

    </>
  );
};

export default Stringassignment;