const FormField = ({ label, error, children }) => (
  <div className="input-group">
    <label className="text-text-dim mb-2 block text-[10px] font-bold tracking-widest uppercase">
      {label}
    </label>
    {children}
    {error && (
      <p className="text-secondary mt-2 rounded-lg bg-red-400 p-2 text-xs font-semibold">
        {error.message}
      </p>
    )}
  </div>
);
export default FormField;
