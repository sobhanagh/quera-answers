

function filterAndSortProducts(products, criteria) {
    let filteredProducts = [...products];

    if (criteria.categories && criteria.categories.length > 0) {
        filteredProducts = filteredProducts.filter((item) =>
            criteria.categories.includes(item.category)
        );
    }

    if (criteria.priceRange) {
        filteredProducts = filteredProducts.filter((item) =>
            item.price >= criteria.priceRange.min && item.price <= criteria.priceRange.max
        );
    }

    if (criteria.nameLength) {
        filteredProducts = filteredProducts.filter((item) =>
            item.name.length >= criteria.nameLength.min && item.name.length <= criteria.nameLength.max
        );
    }

    if (criteria.keywords && criteria.keywords.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            criteria.keywords.some(keyword => product.name.includes(keyword))
        );
    }

    if (criteria.sortBy && criteria.sortBy.length > 0) {
        filteredProducts.sort((a, b) => {
            for (const criterion of criteria.sortBy) {
                const { field, order } = criterion;
                const aValue = a[field];
                const bValue = b[field];

                let comparison = 0;

                if (aValue < bValue) comparison = -1;
                if (aValue > bValue) comparison = 1;

                if (order === "descending") comparison *= -1;

                if (comparison !== 0) return comparison;
            }
            return 0;
        });
    }

    return filteredProducts;
}
module.exports = { filterAndSortProducts };

