import React from 'react';
import {
  Typography,
  Button,
  Grid} from '@mui/material';
import { Link as LinkIcon } from '@mui/icons-material';

import { StaticPaper } from './StaticPaper';

export default function ResourcesPage() {
    const resources = [
      {
        name: 'Официальный сайт Мосполитеха',
        url: 'https://mospolytech.ru/'
      },
      {
        name: 'GitHub репозиторий проекта',
        url: 'https://github.com/mospolytech-sdo'
      },
      {
        name: 'Документация API',
        url: 'https://api.mospolytech-sdo.ru/docs'
      }
    ];
  
    return (
      <StaticPaper sx={{ p: 6, mb: 4 }}>
        <Typography variant="h1" gutterBottom sx={{ color: '#90caf9' }}>
          Ресурсы
        </Typography>
  
        <Grid container spacing={3}>
          {resources.map((resource, index) => (
            <Grid item md={4} key={index}>
              <Button
                component="a"
                href={resource.url}
                target="_blank"
                rel="noopener"
                fullWidth
                sx={{
                  height: 120,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(144, 202, 249, 0.1)'
                  }
                }}
              >
                <LinkIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="body1">{resource.name}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </StaticPaper>
    );
  }