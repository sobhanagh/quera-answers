def sort_dependencies(packages, package_name):
    visitedPkgs = set()
    package_dependencies = []

    def dfs(pkg):
        if pkg in visitedPkgs:
            return
        visitedPkgs.add(pkg)
        for item in packages.get(pkg, []):
            dfs(item)
        if pkg != package_name:
            package_dependencies.append(pkg)
    dfs(package_name)
    return package_dependencies
