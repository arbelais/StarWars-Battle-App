export default function getRandomBattle(characters: number): number[] {
  if (characters < 1) return []

  const firstNumber = Math.floor(Math.random() * characters)
  let secondNumber = Math.floor(Math.random() * characters)

  if (firstNumber === secondNumber) {
    secondNumber = Math.floor(Math.random() * characters)
  }

  return [firstNumber, secondNumber]
}
