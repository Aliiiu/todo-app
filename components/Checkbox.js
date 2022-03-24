export default function Checkbox({ disabled, completed, toggleCompleted }) {
  return (
    <input
      disabled={disabled}
      type="checkbox"
      className="p-2 rounded-full border-gray-200 bg-white focus:outline-none focus:ring-0"
      checked={completed}
      onChange={toggleCompleted}
    />
  );
}