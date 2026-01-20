'use client'

import React, { useState } from 'react'
import { VoiceToTextService } from '../../services/communicationService'

const VoiceToTextComponent = ({ onTranscription }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [recordingId, setRecordingId] = useState(null)

  const startRecording = async () => {
    try {
      setIsRecording(true)
      const { recordingId } = await VoiceToTextService.startRecording()
      setRecordingId(recordingId)
    } catch (error) {
      alert('Voice recording not supported or permission denied')
      setIsRecording(false)
    }
  }

  const stopRecording = async () => {
    if (!recordingId) return

    setIsRecording(false)
    setIsProcessing(true)

    try {
      const result = await VoiceToTextService.stopRecording(recordingId)
      onTranscription(result.transcription)
    } catch (error) {
      alert('Error processing voice recording')
    } finally {
      setIsProcessing(false)
      setRecordingId(null)
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {!isRecording && !isProcessing && (
        <button
          type="button"
          onClick={startRecording}
          style={{
            padding: '10px 15px',
            background: '#0052cc',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <i className="fas fa-microphone"></i>
          Start Voice Input
        </button>
      )}

      {isRecording && (
        <button
          type="button"
          onClick={stopRecording}
          style={{
            padding: '10px 15px',
            background: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'pulse 1s infinite'
          }}
        >
          <i className="fas fa-stop"></i>
          Stop Recording
        </button>
      )}

      {isProcessing && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280' }}>
          <i className="fas fa-spinner fa-spin"></i>
          Processing voice...
        </div>
      )}
    </div>
  )
}

export default VoiceToTextComponent
