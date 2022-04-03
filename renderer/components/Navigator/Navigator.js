import { useEffect, useState } from 'react'

const Navigator = ({ items = [], className = '', onSelect, selected }) => {
  const [active, setActive] = useState(selected)
  const handleClick = value => () => {
    if (onSelect) onSelect(value)
    if (!selected) setActive(value)
  }

  useEffect(() => setActive(selected), [selected])

  return (
    <nav
      className={className}
      style={{ display: 'flex', gap: 'var(--padding)' }}
    >
      {items.map(item => (
        <button
          className={`tab${active === item.value ? ' active' : ''}`}
          key={item.value}
          onClick={handleClick(item.value)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
export default Navigator
