import React from 'react';
import {
  Typography,
  Paper} from '@mui/material';

import { StaticPaper } from './StaticPaper';

export default function JournalPage() {
    const posts = [
      {
        date: '15.05.2025',
        title: 'Начало разработки',
        content: 'Сформированы основные требования к системе, утвержден технический план'
      },
      {
        date: '25.05.2025',
        title: 'Первый прототип',
        content: 'Реализована базовая функциональность проверки Python-кода'
      },
      {
        date: '10.06.2025',
        title: 'Интеграция с Moodle',
        content: 'Завершена работа над модулем интеграции с системой LMS Moodle'
      }
    ];
  
    return (
      <StaticPaper sx={{ p: 6, mb: 4 }}>
        <Typography variant="h1" gutterBottom sx={{ color: '#90caf9' }}>
          Журнал
        </Typography>
  
        {posts.map((post, index) => (
          <Paper key={index} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" sx={{ color: '#f48fb1' }}>{post.title}</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>{post.date}</Typography>
            <Typography>{post.content}</Typography>
          </Paper>
        ))}
      </StaticPaper>
    );
  }
  