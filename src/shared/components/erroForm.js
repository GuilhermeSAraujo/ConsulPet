export default function AlertaErroForm({ textoErro }) {
  return (
    <span
      style={{
			  color: 'red',
			  fontSize: '14px',
			  lineHeight: '15px',
			  margin: '5px 0 0'
      }}
      role="alert"
    >
      {textoErro}
    </span>
  );
}
