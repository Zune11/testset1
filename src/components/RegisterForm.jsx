import { useState } from 'react'
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material'

export default function RegisterForm({ onSubmit }) {
    const [music, setMusic] = useState({
        title: '',
        genre: '',
        artist: '',
        bpm: '',
        label: '',
        role: ''
    })
    const [errors, setErrors] = useState({})
    const validateForm = () => {
        const error = {}
        if (music.title.length < 3) {
            error.title = 'Minimum of 3 characters'
        }
        if (music.genre === '') {
            error.genre = 'Genre is required'
        }

        if (music.artist === '') {
            error.artist = 'Artist Name is required'
        }

        if (music.bpm < 1 || music.bpm > 100) {
            error.bpm = 'BPM must be 1-100'
        }

        if (music.label === '') {
            error.label = 'Record label is required'
        }

        if (music.role === '') {
            error.role = 'Select a role'
        }
        setErrors(error)
        return Object.keys(error).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            onSubmit(music)

            setMusic({
                title: '',
                genre: '',
                artist: '',
                bpm: '',
                label: '',
                role: ''
            })
            setErrors({})
        }
    }
    return (
        <Box sx={{ width: 350}}>
            <Typography variant="h5">
                Spotify Music Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Track Title"
                    value={music.title}
                    onChange={(e) =>
                        setMusic({ ...music, title: e.target.value })
                    }
                    error={!!errors.title}
                    helperText={errors.title}
                />
                <TextField
                    label="Genre"
                    value={music.genre}
                    onChange={(e) =>
                        setMusic({ ...music, genre: e.target.value })
                    }
                    error={!!errors.genre}
                    helperText={errors.genre}
                />
                <TextField
                    label="Artist Name"
                    value={music.artist}
                    onChange={(e) =>
                        setMusic({ ...music, artist: e.target.value })
                    }
                    error={!!errors.artist}
                    helperText={errors.artist}
                />
                <TextField
                    label="BPM (1-100)"
                    type="number"
                    value={music.bpm}
                    onChange={(e) =>
                        setMusic({ ...music, bpm: e.target.value })
                    }
                    error={!!errors.bpm}
                    helperText={errors.bpm}
                />
                <TextField
                    label="Record Label"
                    value={music.label}
                    onChange={(e) =>
                        setMusic({ ...music, label: e.target.value })
                    }
                    error={!!errors.label}
                    helperText={errors.label}
                />
                <Typography sx={{ mt: 2 }}>
                    User Role
                </Typography>
                <RadioGroup
                    row
                    value={music.role}
                    onChange={(e) =>
                        setMusic({ ...music, role: e.target.value })
                    }
                >
                    <FormControlLabel
                        value="creator"
                        control={<Radio />}
                        label="Creator"
                    />
                    <FormControlLabel
                        value="listener"
                        control={<Radio />}
                        label="Listener"
                    />
                </RadioGroup>
                {errors.role && (
                    <Typography color="error">
                        {errors.role}
                    </Typography>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Submit Music
                </Button>
            </form>
        </Box>
    )
}