"use client"

import { useEffect, useRef } from "react"

export default function NetworkImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 220
    canvas.height = 160

    // Nodes positions
    const nodes = [
      { x: canvas.width / 2, y: canvas.height / 2, r: 15, pulse: 0 },
      { x: canvas.width / 3, y: canvas.height / 3, r: 10, pulse: 0 },
      { x: (canvas.width / 3) * 2, y: canvas.height / 3, r: 10, pulse: 0 },
      { x: canvas.width / 3, y: (canvas.height / 3) * 2, r: 10, pulse: 0 },
      { x: (canvas.width / 3) * 2, y: (canvas.height / 3) * 2, r: 10, pulse: 0 },
      { x: canvas.width / 5, y: canvas.height / 2, r: 8, pulse: 0 },
      { x: (canvas.width / 5) * 4, y: canvas.height / 2, r: 8, pulse: 0 },
    ]

    // Data packets
    const packets: { x: number; y: number; targetIndex: number; progress: number; speed: number }[] = []

    // Create initial packets
    for (let i = 0; i < 5; i++) {
      createNewPacket()
    }

    function createNewPacket() {
      // Start from a random node
      const startNodeIndex = Math.floor(Math.random() * nodes.length)
      // Target is always the central node (index 0) or from central to others
      const targetNodeIndex = startNodeIndex === 0 ? 1 + Math.floor(Math.random() * (nodes.length - 1)) : 0

      packets.push({
        x: nodes[startNodeIndex].x,
        y: nodes[startNodeIndex].y,
        targetIndex: targetNodeIndex,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Redraw connections
      ctx.strokeStyle = "rgba(20, 184, 166, 0.3)" // Teal color
      ctx.lineWidth = 1
      for (let i = 1; i < nodes.length; i++) {
        ctx.beginPath()
        ctx.moveTo(nodes[0].x, nodes[0].y)
        ctx.lineTo(nodes[i].x, nodes[i].y)
        ctx.stroke()
      }

      ctx.strokeStyle = "rgba(20, 184, 166, 0.15)" // Lighter teal
      ctx.beginPath()
      ctx.moveTo(nodes[1].x, nodes[1].y)
      ctx.lineTo(nodes[2].x, nodes[2].y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(nodes[3].x, nodes[3].y)
      ctx.lineTo(nodes[4].x, nodes[4].y)
      ctx.stroke()

      // Update and draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i]
        const startNode = packet.targetIndex === 0 ? nodes[(i % (nodes.length - 1)) + 1] : nodes[0]
        const targetNode = packet.targetIndex === 0 ? nodes[0] : nodes[packet.targetIndex]

        // Update position based on progress
        packet.progress += packet.speed
        if (packet.progress >= 1) {
          // Create pulse effect on target node
          nodes[packet.targetIndex].pulse = 1
          // Remove packet and create a new one
          packets.splice(i, 1)
          createNewPacket()
          continue
        }

        // Calculate current position
        packet.x = startNode.x + (targetNode.x - startNode.x) * packet.progress
        packet.y = startNode.y + (targetNode.y - startNode.y) * packet.progress

        // Draw packet
        ctx.fillStyle = "rgba(20, 184, 166, 0.8)" // Teal color
        ctx.beginPath()
        ctx.arc(packet.x, packet.y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Redraw nodes with pulse effect
      nodes.forEach((node) => {
        // Update pulse
        if (node.pulse > 0) {
          node.pulse -= 0.02
          if (node.pulse < 0) node.pulse = 0
        }

        // Draw pulse effect
        if (node.pulse > 0) {
          ctx.fillStyle = `rgba(20, 184, 166, ${node.pulse * 0.3})` // Teal with opacity
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r + 10 * (1 - node.pulse), 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r)
        gradient.addColorStop(0, "rgba(20, 184, 166, 0.7)") // Teal with opacity
        gradient.addColorStop(1, "rgba(20, 184, 166, 0.2)") // Lighter teal

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      // No need to clean up requestAnimationFrame as component unmount will stop it
    }
  }, [])

  return <canvas ref={canvasRef} className="w-[220px] h-[160px]" />
}

