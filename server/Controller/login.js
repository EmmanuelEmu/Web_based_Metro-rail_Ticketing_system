const testLogin = (req, res) =>{
    const shouldShowComponent = true;
    if (shouldShowComponent) {
        res.status(200).json({ message: 'Component can be shown' });
      } else {
        res.status(403).json({ message: 'Access denied' });
      }
}

module.exports = {testLogin};