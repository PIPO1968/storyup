// Endpoint para login de usuario StoryUp
// Devuelve 405 para cualquier método que no sea POST

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  // Aquí deberías conectar a tu base de datos y validar el usuario
  // Ejemplo ficticio:
  // const user = await db.getUserByEmailAndPassword(email, password);
  // if (!user) return res.status(401).json({ error: 'Credenciales incorrectas' });
  // return res.status(200).json(user);
  return res.status(501).json({ error: 'No implementado. Agrega la lógica de autenticación.' });
}
