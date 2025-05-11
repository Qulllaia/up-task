import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid} from '@mui/material';

import { StaticPaper } from './StaticPaper';

export default function AboutPage() {
  return (
    <StaticPaper sx={{ p: 6, mb: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ color: '#90caf9' }}>
        О проекте
      </Typography>

      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
        Система дистанционного обучения Московского Политеха представляет собой 
        современную платформу для автоматизированной проверки лабораторных работ. 
        Основная цель - сократить время проверки работ и повысить качество обучения.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#f48fb1' }}>
              Особенности системы
            </Typography>
            <List>
              {[
                'Поддержка 15+ языков программирования',
                'Интеграция с LMS Moodle',
                'Модульная архитектура',
                'Масштабируемая инфраструктура',
                'Резервное копирование данных'
              ].map((item) => (
                <ListItem key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#f48fb1' }}>
              Технологии
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Бэкенд</Typography>
                <Typography>Python/Django</Typography>
                <Typography>PostgreSQL</Typography>
                <Typography>RabbitMQ</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Фронтенд</Typography>
                <Typography>React.js</Typography>
                <Typography>Material-UI</Typography>
                <Typography>Redux</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </StaticPaper>
  );
}
