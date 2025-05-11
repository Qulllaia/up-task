import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid} from '@mui/material';

import { StaticPaper } from './StaticPaper';

export default function TeamPage() {
    const members = [
      { 
        name: 'Иванов Иван',
        role: 'Тимлид',
        contribution: 'Архитектура проекта, бэкенд разработка',
        image: 'https://source.unsplash.com/random/200x200?person1'
      },
      { 
        name: 'Петрова Анна', 
        role: 'Фронтенд разработчик',
        contribution: 'Интерфейсы пользователя, интеграция API',
        image: 'https://source.unsplash.com/random/200x200?person2'
      },
      { 
        name: 'Сидоров Дмитрий',
        role: 'DevOps инженер',
        contribution: 'Настройка инфраструктуры, CI/CD',
        image: 'https://source.unsplash.com/random/200x200?person3'
      }
    ];
  
    return (
      <StaticPaper sx={{ p: 6, mb: 4 }}>
        <Typography variant="h1" gutterBottom sx={{ color: '#90caf9' }}>
          Участники
        </Typography>
  
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {members.map((member, index) => (
            <Grid item md={4} key={index}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Box 
                  component="img"
                  src={member.image}
                  sx={{ 
                    width: 150, 
                    height: 150, 
                    borderRadius: '50%', 
                    mb: 2,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}
                />
                <Typography variant="h5">{member.name}</Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>{member.role}</Typography>
                <Typography variant="body2">{member.contribution}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </StaticPaper>
    );
}