import { useState } from "react";
import { useSearch } from "react-easy-search";

function App() {
  const dummy1 = {
    topic: "Lorem excepteur sunt sunt dolor.",
    tagline: "Incididunt adipisicing cillum tempor elit excepteur cillum.",
    subtopics: [
      {
        subtopic:
          "Anim sint ut eiusmod consectetur deserunt enim irure ullamco Lorem mollit Lorem.",
        description:
          "Ea non Lorem commodo sint sit. Ipsum id amet ad labore laborum sit anim aute ipsum dolore. Commodo anim occaecat voluptate Lorem minim est amet anim veniam. Nisi aliquip esse laboris minim cupidatat quis.",
      },
      {
        subtopic:
          "Fugiat aliqua duis adipisicing id velit ipsum incididunt proident.",
        description:
          "Est duis consectetur consectetur proident incididunt veniam adipisicing commodo. Proident nulla laborum consequat enim et qui id aliqua Lorem in eiusmod non ut cupidatat. Nisi ipsum deserunt mollit mollit nulla mollit Lorem irure. Veniam sit sunt ex duis voluptate ea aliquip aliqua cillum enim. Consectetur ullamco cillum quis veniam minim est elit.",
      },
    ],
  };

  const dummy2 = [1, 2];

  const [input, setInput] = useState<string>("proident");

  const { results } = useSearch(dummy1, input);

  console.log(results, input);

  // useSearch(dummy2);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={({ target: { value } }) => {
          setInput(value);
        }}
      />
      {results.map((r) => (
        <p>{r}</p>
      ))}
    </div>
  );
}

export default App;
