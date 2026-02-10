const recipes = {
    'siamois': {
        title: 'Le Siamois aux Perles de Coco',
        subtitle: 'Une élégance orientale en trompe-l\'œil',
        description: 'Ce dessert raffiné capture la grâce du Siamois à travers un dôme immaculé de chocolat blanc. Le contraste des saveurs évoque le tempérament vif de cette race noble.',
        ingredients: [
            'Chocolat blanc de couverture (65% cacao beurre)',
            'Cœur fondant à la passion et mangue infusée au gingembre',
            'Génoise légère à la noix de coco grillée',
            'Perles de tapioca au lait de coco (les "yeux")',
            'Poudre de charbon végétal (pour les oreilles et le museau)'
        ],
        steps: [
            'Tempérer le chocolat blanc et mouler le dôme félin.',
            'Préparer le cœur passion et le congeler dans un moule sphérique.',
            'Monter la génoise coco et la détailler à la base du dôme.',
            'Assembler le cœur au centre du dôme avant de refermer.',
            'Appliquer délicatement la poudre de charbon pour le marquage siamois.'
        ],
        comments: [
            { user: 'Critique Gastronomique de Lyon', text: 'Une précision chirurgicale dans le dressage. Le goût est divin.' },
            { user: 'PassionPâtisserie', text: 'On jurerait voir un chat se reposer sur l\'assiette. Bluffant !' }
        ]
    },
    'maine-coon': {
        title: 'Le Maine Coon au Chocolat Noir',
        subtitle: 'Puissance et texture sauvage',
        description: 'Inspiré par le géant des forêts, ce plat mise sur des textures brutes et un cacao intense pour rappeler le pelage fourni et le caractère majestueux du Maine Coon.',
        ingredients: [
            'Mousse au chocolat noir 85% d\'Équateur',
            'Croustillant praliné aux noisettes du Piémont',
            'Glaçage miroir marbré (effet fourrure)',
            'Tuiles fines en dentelle pour les moustaches',
            'Éclats de fèves de cacao pour la texture'
        ],
        steps: [
            'Réaliser une mousse aérienne mais dense avec le chocolat d\'Équateur.',
            'Préparer le croustillant praliné pour la base structurelle.',
            'Utiliser un pochoir pour créer l\'effet de fourrure avec le glaçage.',
            'Dresser les tuiles dentelle pour simuler les oreilles plumeuses.',
            'Déguster à température ambiante pour libérer les arômes de bois.'
        ],
        comments: [
            { user: 'L\'Épicurien Moderne', text: 'L\'amertume du cacao est parfaitement équilibrée par le croquant des noisettes.' },
            { user: 'Chef Valéry', text: 'Le plus beau trompe-l\'œil de l\'année. Un travail sur le pelage incroyable.' }
        ]
    },
    'persan': {
        title: 'Le Persan à la Vanille de Madagascar',
        subtitle: 'Douceur et volume aérien',
        description: 'Tout en rondeur et en douceur, cette création est un hommage à la fourrure soyeuse du Persan. Un nuage de vanille qui fond en bouche.',
        ingredients: [
            'Bavaroise à la vanille bourbon de Madagascar',
            'Biscuit Joconde imbibé au sirop de fleur d\'oranger',
            'Crème chantilly montée très ferme (effet poil long)',
            'Ganache montée au chocolat blanc pour les détails',
            'Petites billes de sucre argentées pour le regard'
        ],
        steps: [
            'Confectionner la bavaroise de vanille et la couler dans un moule galbé.',
            'Préparer le biscuit Joconde et l\'imbiber légèrement.',
            'Pocher la chantilly à l\'aide d\'une douille "gazon" pour créer l\'effet fourrure.',
            'Ajouter délicatement les détails du visage en ganache.',
            'Servir avec un coulis de framboise pour le contraste visuel.'
        ],
        comments: [
            { user: 'Mme de Saint-Ciel', text: 'C\'est presque trop mignon pour être mangé. Une douceur infinie.' },
            { user: 'Guide des Saveurs', text: 'La texture de la chantilly est une prouesse technique notable.' }
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
