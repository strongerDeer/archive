type List = {
  name: string;
  items: { value: string; label: string }[];
  require?: Boolean;
};

export default function RadioList({ list }: { list: List }) {
  return (
    <fieldset>
      <legend>{list.name}</legend>
      <ul>
        {list &&
          list.items.map((item, index) => (
            <li key={item.value}>
              <input
                id={item.value}
                name={list.name}
                value={item.value}
                type="radio"
                defaultChecked={index === 0}
                required={list.require ? true : false}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </li>
          ))}
      </ul>
    </fieldset>
  );
}
