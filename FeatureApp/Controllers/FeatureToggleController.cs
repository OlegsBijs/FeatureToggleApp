using FeatureApp.Data;
using FeatureApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Route("api/[controller]")]
[ApiController]
public class FeatureToggleController : ControllerBase
{
    private readonly AppDbContext _context;

    public FeatureToggleController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/FeatureToggle
    [HttpGet]
    public async Task<ActionResult<IEnumerable<FeatureToggle>>> GetFeatureToggles()
    {
        return await _context.FeatureToggles.ToListAsync();
    }

    // GET: api/FeatureToggle/1
    [HttpGet("{id}")]
    public async Task<ActionResult<FeatureToggle>> GetFeatureToggle(int id)
    {
        var featureToggle = await _context.FeatureToggles.FindAsync(id);

        if (featureToggle == null)
        {
            return NotFound();
        }

        return featureToggle;
    }

    // POST: api/FeatureToggle
    [HttpPost]
    public async Task<ActionResult<FeatureToggle>> PostFeatureToggle(FeatureToggle featureToggle)
    {
        _context.FeatureToggles.Add(featureToggle);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetFeatureToggle), new { id = featureToggle.Id }, featureToggle);
    }
    // PUT: api/FeatureToggle/1
    [HttpPut("{id}")]
    public async Task<IActionResult> PutFeatureToggle(int id, FeatureToggle featureToggle)
    {
        if (id != featureToggle.Id)
        {
            return BadRequest();
        }

        var existingToggle = await _context.FeatureToggles.FindAsync(id);

        if (existingToggle == null)
        {
            return NotFound();
        }
        existingToggle.DisplayName = featureToggle.DisplayName;
        existingToggle.TechnicalName = featureToggle.TechnicalName;
        existingToggle.ExpiresOn = featureToggle.ExpiresOn;
        existingToggle.Description = featureToggle.Description;
        existingToggle.Inverted = featureToggle.Inverted;
        existingToggle.CustomerIds = featureToggle.CustomerIds;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/FeatureToggle/1
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFeatureToggle(int id)
    {
        var featureToggle = await _context.FeatureToggles.FindAsync(id);
        if (featureToggle == null)
        {
            return NotFound();
        }

        _context.FeatureToggles.Remove(featureToggle);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool FeatureToggleExists(int id)
    {
        return _context.FeatureToggles.Any(e => e.Id == id);
    }
}