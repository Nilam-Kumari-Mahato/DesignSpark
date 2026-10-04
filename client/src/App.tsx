
import './App.css'
import SideBar from './components/SideBar'
import Hero from './components/Hero'
import { useState } from 'react'
import type { Challenge } from './types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function App() {
  const [category, setCategory] = useState('Healthcare')
  const [difficulty, setDifficulty] = useState('Beginner')
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateChallenge = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`${API_BASE_URL}/api/challenges/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, difficulty }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.error || result.errors?.join(', ') || 'Could not generate a challenge.')
      }
      setChallenge(result.data as Challenge)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not connect to the DesignSpark API.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">DesignSpark</h1>
        <p className="site-tagline">Never stare at a blank canvas again.</p>
        <p className="site-description">Get a fresh UI/UX design challenge tailored to your interests and skill level.</p>
      </header>
      <SideBar
        category={category}
        difficulty={difficulty}
        loading={loading}
        onCategoryChange={setCategory}
        onDifficultyChange={setDifficulty}
        onGenerate={generateChallenge}
      />
      <Hero challenge={challenge} loading={loading} error={error} />
    </>
  )
}

export default App
