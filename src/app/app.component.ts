import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landingpage';
  isDarkMode = true;

  features = [
    {
      icon: 'fas fa-bolt',
      title: 'Alta Performance',
      description: 'Velocidade e eficiência nos resultados'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Clean Code',
      description: 'Código limpo e fácil de manter'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Análise de Dados',
      description: 'Insights valiosos para tomar melhores decisões'
    },
    {
      icon: 'fas fa-cloud',
      title: 'ASP.NET Core',
      description: 'Desenvolvimento web moderno e escalável'
    }
  ];

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  // Função para scroll suave até a seção de recursos
  scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}