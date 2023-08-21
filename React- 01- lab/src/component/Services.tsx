interface ServicesInfo {
  ServicesType?: string;
  price?: number;
}
export default function Services(services: ServicesInfo) {
  return (
    <div>
      <h1>{services.ServicesType}</h1>
      <h2>{services.price}</h2>
    </div>
  );
}
