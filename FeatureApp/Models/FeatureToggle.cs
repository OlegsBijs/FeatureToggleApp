namespace FeatureApp.Models
{
    public class FeatureToggle
    {
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string TechnicalName { get; set; }
        public DateTime? ExpiresOn { get; set; }
        public string Description { get; set; }
        public bool Inverted { get; set; }
        public string CustomerIds { get; set; }
    }
}