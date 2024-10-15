export function ThrowComponent() {
  
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong.');
  };

  return <p>Didn't throw</p>
}