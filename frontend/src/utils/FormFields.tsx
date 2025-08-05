import Dropdown from "../icons/Dropdown";

export const InputField = ({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-white">{label}</label>
    <input
      type={type}
      className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-neutral-800 focus:outline-none focus:border-transparent focus:ring-3 focus:ring-[#3D56B2]/40 text-white transition-all duration-300"
    />
  </div>
);

export const TextareaField = ({ label }: { label: string }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-white">{label}</label>
    <textarea
      className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-neutral-800 focus:outline-none focus:border-transparent focus:ring-3 focus:ring-[#3D56B2]/40 text-white transition-all duration-300"
      rows={4}
    />
  </div>
);

export const SelectField = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-white">{label}</label>
    <div className="relative group">
      <select className="appearance-none w-full p-3 pr-10 rounded-xl bg-[#1a1a1a] border border-neutral-800 focus:outline-none focus:border-transparent focus:ring-3 focus:ring-[#3D56B2]/40 text-white transition-all duration-300">
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className="outline-none ring-4 rounded-2xl ring-[#3D56B2]/40"
          >
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-3 p-1 right-3 flex items-center text-[#f9f9f9] group-hover:bg-[#3D56B2]/30 rounded-full">
        <Dropdown />
      </div>
    </div>
  </div>
);
