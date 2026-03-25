"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Typewriter({ strings }: { strings: string[] }) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const i = loopNum % strings.length
      const fullText = strings[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 40 : 100)

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2500)
        return
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        timer = setTimeout(handleTyping, 500) // Small pause before new word
        return
      }

      timer = setTimeout(handleTyping, typingSpeed)
    }

    timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, strings, typingSpeed])

  return (
    <span className="inline-block whitespace-nowrap">
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] sm:w-[5px] h-[0.9em] bg-primary ml-1 lg:ml-2 align-middle"
      />
    </span>
  )
}
