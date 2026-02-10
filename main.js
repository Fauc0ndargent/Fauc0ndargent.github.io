const recipes = {
    'siamois': {
        title: 'Le Siamois Rôti aux Herbes de Chat',
        subtitle: 'Une tendreté orientale authentique',
        description: 'Ce plat met en avant la finesse du Siamois, préparé lentement pour préserver ses saveurs délicates. Une expérience culinaire audacieuse pour les amateurs de viandes rares.',
        ingredients: [
            'Filet de Siamois de première qualité (500g)',
            'Infusion d\'herbe à chat sauvage et valériane',
            'Jus de cuisson réduit à la moelle de félin',
            'Croquettes artisanales concassées pour le croquant',
            'Garniture de fleurs de luzerne séchées'
        ],
        steps: [
            'Préparer le filet de Siamois en retirant les excédents de gras.',
            'Faire mariner dans l\'infusion d\'herbe à chat pendant 4 heures.',
            'Saisir à feu vif pour marquer la viande, puis rôtir à basse température.',
            'Napper avec le jus de cuisson réduit.',
            'Saupoudrer d\'éclats de croquettes juste avant de servir.'
        ],
        comments: [
            { user: 'Critique Gastronomique de Lyon', text: 'Une texture surprenante, presque soyeuse. Le Siamois est d\'une finesse incroyable.' },
            { user: 'CarnivoreRaffiné', text: 'On sent vraiment le caractère vif de la race dans l\'assiette. Un délice.' }
        ]
    },
    'maine-coon': {
        title: 'Le Maine Coon en Daube de Forêt',
        subtitle: 'Puissance et caractère sauvage',
        description: 'Inspiré par le géant des forêts, ce ragoût généreux utilise des morceaux choisis de Maine Coon pour un plat riche en goût et en histoire.',
        ingredients: [
            'Épaule de Maine Coon maturée (800g)',
            'Bouillon de carcasse corsé au poivre long',
            'Réduction de pâtée de luxe au foie de volaille',
            'Racines forestières et champignons des bois',
            'Éclats de griffage de félin pour la texture'
        ],
        steps: [
            'Détailler le Maine Coon en gros cubes réguliers.',
            'Faire revenir la viande dans un mélange de gras de canard et de bouillon félin.',
            'Mijoter doucement pendant 6 heures avec les racines et les champignons.',
            'Lier la sauce avec la réduction de pâtée.',
            'Dresser dans une jatte en bois pour rappeler l\'aspect rustique.'
        ],
        comments: [
            { user: 'L\'Épicurien Moderne', text: 'La puissance du Maine Coon est ici sublimée par une cuisson longue et maîtrisée.' },
            { user: 'Chef Valéry', text: 'Un plat de chasseur revisité pour les palais les plus exigeants.' }
        ]
    },
    'persan': {
        title: 'Le Persan en Velouté de Crème',
        subtitle: 'Douceur infinie et onctuosité',
        description: 'Tout en rondeur et en onctuosité, ce velouté célèbre la douceur du Persan. Une soupe riche et crémeuse qui caresse le palais.',
        ingredients: [
            'Suprême de Persan poché au lait (400g)',
            'Crème fraîche épaisse infusée à la cataire',
            'Émulsion de graisse fémorale de félin',
            'Croutons de croquettes au beurre clarifié',
            'Poudre de poils de Persan (pour la décoration)'
        ],
        steps: [
            'Pocher délicatement le suprême de Persan dans un lait assaisonné.',
            'Mixer la viande avec la crème infusée jusqu\'à obtenir une texture lisse.',
            'Passer au chinois pour une onctuosité parfaite.',
            'Préparer les croutons de croquettes sautés au beurre.',
            'Servir chaud avec un nuage d\'émulsion et une pincée de poudre décorative.'
        ],
        comments: [
            { user: 'Mme de Saint-Ciel', text: 'C\'est d\'une douceur... On a l\'impression de boire un nuage de ronronnements.' },
            { user: 'Guide des Saveurs', text: 'Le Persan apporte une base crémeuse unique. Une vraie réussite gastronomique.' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recipe-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.recipe-card');
            const recipeId = card.getAttribute('data-recipe');
            const recipe = recipes[recipeId];

            if (recipe) {
                renderRecipe(recipe);
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    function renderRecipe(recipe) {
        modalBody.innerHTML = `
            <h2 class="modal-title">${recipe.title}</h2>
            <p class="modal-subtitle"><em>${recipe.subtitle}</em></p>
            <div class="modal-main">
                <div class="modal-description">
                    <h3>L'Inspiration</h3>
                    <p>${recipe.description}</p>
                </div>
                <div class="modal-lists">
                    <div class="modal-ingredients">
                        <h3>Ingrédients Nobles</h3>
                        <ul>
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="modal-steps">
                        <h3>Le Secret du Chef</h3>
                        <ol>
                            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                <div class="modal-comments">
                    <h3>Critiques Élogieuses</h3>
                    ${recipe.comments.map(c => `
                        <div class="modal-comment">
                            <p>"${c.text}"</p>
                            <cite>— ${c.user}</cite>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
});
