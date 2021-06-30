const formatName = name => {
    return name.character(0).toUpperCase() + name.slice(1).toLowerCase();
};

module.exports = formatName 