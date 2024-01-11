"use client"
import { getKeys, createKey } from "@near-js/biometric-ed25519";
export default function Home() {
  const buttonStyle = {width: 400, height: 50, margin: 50}
  const handleCreate = async () => {
    const x = await createKey("test")
    console.log(x)
  }

  const handleGet = async () => {
    const x = await getKeys("test")
    console.log(x)
  }
  return (
    <div>
      <button style={buttonStyle} onClick={handleCreate}>CREATE KEY</button>
      <button style={buttonStyle} onClick={handleGet}>GET KEY</button>
    </div>
  )
}

