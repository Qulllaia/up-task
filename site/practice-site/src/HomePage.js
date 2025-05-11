import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid} from '@mui/material';

import { StaticPaper } from './StaticPaper';


export default function HomePage() {
    return (
      <StaticPaper sx={{ p: 6, mb: 4 }}>
        <Typography variant="h1" gutterBottom sx={{ color: '#90caf9' }}>
          Мосполитех СДО
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
          Интеллектуальная система проверки лабораторных работ
        </Typography>
  
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          Проект направлен на создание автоматизированной системы проверки лабораторных работ 
          для студентов Московского Политеха. Система позволяет:
        </Typography>
  
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#f48fb1' }}>
                Для студентов
              </Typography>
              <List>
                {[
                  'Автоматическая проверка работ в реальном времени',
                  'Подробная статистика по ошибкам',
                  'Возможность повторной отправки',
                  'Интеграция с Git-репозиториями',
                  'Онлайн-чат с преподавателем'
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemText 
                      primary={item} 
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
  
          <Grid item md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#f48fb1' }}>
                Для преподавателей
              </Typography>
              <List>
                {[
                  'Централизованное управление заданиями',
                  'Автоматическая оценка работ',
                  'Детектор плагиата',
                  'Аналитика успеваемости',
                  'Гибкая система отчетности'
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemText 
                      primary={item} 
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </StaticPaper>
    );
  }
  