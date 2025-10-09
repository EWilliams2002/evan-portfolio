


export default function Keyboard(props) {

  const keyboardLetters = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Enter", "Z", "X", "C", "V", "B", "N", "M", "←"
  ];

  const keyboard = keyboardLetters.map( letter => (

    <button
      key={letter}
      id={letter}
      className="letters"
      type="button"
      onClick={() => props.clicked(letter)} // <-- use onClick
      >

      {letter}
      
    </button>

  ));

  return (
    <>

      {keyboard}
      
    </>
  );
}

