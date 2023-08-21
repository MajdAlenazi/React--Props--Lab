interface btnName {
  name: string;
  language: string;
  yearsExp: number;
  CompanieName: string;
}
export default function Programers(programers: btnName) {
  return (
    <div>
      <h1>Name:{programers.name}</h1>
      <h2>language:{programers.language}</h2>
      <h3>Years Expraince{programers.yearsExp}</h3>
      <h4>Compane Name:{programers.CompanieName}</h4>
    </div>
  );
}
