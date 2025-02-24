document.addEventListener("DOMContentLoaded", function() {
    // Configuration: Primary source content for each exhibit
    const primarySourceContent = {
      "1": { // Exhibit 1
        "1": `
        Contextualization: 
This art, the 1789 engraving pretty humorously but painfully painted the inequalities in France before French Revolution. The First Estate (clergy) and Second Estate (nobility) are comfortably sitting on the shoulders of the saddled Third Estate (commoners), representing the social and economic division between the estates.  While the privileged classes (first and second) enjoyed tax exemptions, land ownership, and political power, the people in the third state, who made up 97% of the population were crushed by rising taxes, food shortages, and lack of representation.

        Enlightenment thinkers:
Rousseau and Voltaire had long criticized this injustice in the late 18th century. This inequality led the Third Estate to order political reforms, setting the stage for revolution. This engraving reflects the growing class consciousness that fueled the call for a more just society.
        `,
        "2": `The storming of the Bastille on July 14, 1789 was not a mere jailbreak, but a symbol of bold rebellion against tyranny. The Bastille, a fortress in Paris, symbolized the unwavering authority of King Louis XVI and the oppression of the monarchy. Although it housed only a handful of prisoners at the time, thousands of Parisians stormed the fortress to seize weapons and gunpowder, spurred by rumors that the king intended to use his army to crush revolutionary protests. This action was fueled by Enlightenment ideas. Thinkers like John Locke defended the right to overthrow unjust governments, and Jean-Jacques Rousseau's concept of the social contract emphasized that political power should belong to the people, not to God. The crowd saw the Bastille not merely as a prison, but as a symbol of royal tyranny, the collapse of which meant the collapse of the absolute monarchy's rule over the people. Louis XVI further aroused public anger by dismissing Jacques Necker, Minister of Finance, who was known to be sympathetic to the Third Estate. The news of the fall of the Bastille spread like wildfire, and similar uprisings broke out all over France, pushing the revolution to a more radical stage.
        `
      },
      "2": { // Exhibit 2
        "1": `
        Context:
Locked out of the House of Lords by order of Louis XVI, the Third Estate found an empty indoor tennis court and took a defiant oath that it would not dissolve until a new French constitution was drafted; on June 20, 1789, the Third Estate, now called the National Assembly, rejected absolute monarchy and claimed autonomy. This bold action, immortalized in Jacques-Louis David's famous painting, marked a radical shift from protest to revolution. Inspired by Enlightenment ideas such as Rousseau's social contract and Montesquieu's separation of powers, the Third Estate challenged the long-held belief in the divine right of kings to rule. The oaths taken on the tennis courts also signaled the growing power of print culture. Pamphlets and newspapers quickly reported the event, which garnered public support and increased calls for change. Louis reluctantly allowed the Estates General Assembly to continue, but his refusal to respond sincerely to the people's demands fueled further unrest. This act of defiance laid the foundation for the most important achievements of the Revolution: the abolition of feudal privileges and the drafting of the Declaration of the Rights of Man and Citizen.
        `,
        "2": `After a failed escape from France and suspected of conspiring with a foreign monarch, Louis was tried for treason and sentenced to death by guillotine. His execution, however, was not merely a punishment, but a bold declaration that sovereignty belonged to the people, not the crown. The influence of the Enlightenment was profound, and John Locke's ideas about the right to overthrow unjust rulers and Rousseau's concept of the general will encouraged revolutionaries to see Louis not as a divinely ordained king but as a rebel against the state. Empowered by Montesquieu's call for a separation of powers, the people believed that Louis' death was necessary to dismantle the monarchy and build a republic. Louis' execution shocked Europe and prompted countries such as England and Austria to unite against revolutionary France in the First War of Union. At home, a radical Jacobin faction led by Maximilien Robespierre emerged and saw the king's death as a step toward true freedom. The death of Louis XVI symbolized the end of absolute monarchy, but it also left France with an urgent problem deeply rooted in Enlightenment thought: how to balance liberty, equality, and security in the new republic.`
      },
      "3": { // Exhibit 3
        "1": `The Tennis Court Oath was a defining moment early in the Revolution, as the Third Estate demanded a constitutional monarchy and more political representation. The revolutionaries initially tried moderate reforms, seeking to limit the king's power rather than abolish the Monarchy. Political reconstruction remained the revolutionary's purpose throughout the revolution, showing continuity in their objectives. The Estates-General of 1789 was called in reaction to financial crises but developed into a more overarching movement for constitutional reform. In 1792, the moderate constitutional aims were replaced by outright republicanism toppling the monarchy.`,
        "2": `By 1793, the Revolution had a polar shift from a constitutional reform movement to a radical purge of believed enemies, including the king’s execution. This shift from a monarchy to a republic was a significant deviation from the Revolution's original ambitions, but the idea of centralized power persisted, transferring from the king to revolutionary leaders like Robespierre. During the radical phase–which was the “Reign of Terror” (1793-1794)--there were mass executions and radical policies to “protect” the Revolution. The initial push toward political representation soon turned into radical republicanism and eventually led to a dictatorship under Napoleon by 1799.`
      },
      "4": { // Exhibit 4
        "1": `Olympe de Gouges’s Declaration of the Rights of Woman and the Female Citizen was a direct challenge to the Declaration of the Rights of Man and Citizen (1789), which excluded women from its promises of equality. De Gouges argued that women should have the same political and legal rights as men, including the right to vote, own property, and participate in government. However, the revolutionary government, led by figures such as Robespierre, refused to recognize these rights. In 1793, De Gouges was executed by guillotine, a fate that underscored the Revolution’s unwillingness to extend its ideals of equality to women. Her death highlights the contradictions within the movement: while revolutionaries called for universal rights, they ultimately upheld a system that benefited men, particularly those of a certain social class. Even today, her work remains a powerful symbol of early feminist activism and the fight for gender equality.`,
        "2": `This engraving illustrates the social order before and at the beginning of the French Revolution, with the Third Estate (commoners) having the First Estate (clergy) and the Second Estate (nobility) literally on their backs. This imagery illustrates the common burden of taxation and economic suffering. While the Revolution had originally set out to liberate the Third Estate, the urban poor, or sans-culottes, still suffered from food shortages, economic insecurity, and repression. Even after the collapse of the Monarchy, terrible living conditions persisted as war, domestic conflict, and economic policies neglected their welfare. The photo is a sad reminder that the revolutionary rhetoric of equality was not a solution to poverty. The sans-culottes, who played a crucial role in advancing radical revolutionary policy, were then excluded by the Thermidorian Reaction (1794), which reinstated property qualifications for the vote. Furthermore, although the Revolution aimed to abolish class oppression, real social justice remained impossible for many common people. `
      }
    };
  
    // Determine the exhibit ID from the body data attribute
    const exhibitId = document.body.getAttribute("data-exhibit");
  
    // Screens: Order is assumed as follows:
    // index 0: screen-1 (Inquiry)
    // index 1: screen-2 (Claim)
    // index 2: screen-3 (Primary Source Selection)
    // index 3: textbox-screen (Primary Source Content)
    let currentScreenIndex = 0;
    const screens = document.querySelectorAll(".screen");
  
    // Function to display a specific screen
    function showScreen(index) {
      screens.forEach((screen, i) => {
        if (i === index) {
          screen.classList.add("active");
        } else {
          screen.classList.remove("active");
        }
      });
    }
  
    // Initially show the first screen (inquiry)
    showScreen(currentScreenIndex);
  
    // Event listeners for "Next" buttons
    document.querySelectorAll(".next-button").forEach(btn => {
      btn.addEventListener("click", function() {
        currentScreenIndex++;
        showScreen(currentScreenIndex);
      });
    });
  
    // Event listeners for primary source buttons
    document.querySelectorAll(".primary-source-button").forEach(btn => {
      btn.addEventListener("click", function() {
        const sourceId = btn.getAttribute("data-source");
        showTextbox(sourceId);
      });
    });
  
    // Function to display the textbox screen with dynamic content
    function showTextbox(sourceId) {
      const textboxScreen = document.getElementById("textbox-screen");
      const textbox = document.getElementById("textbox");
  
      // Retrieve the content based on exhibit and source selection
      if (primarySourceContent[exhibitId] && primarySourceContent[exhibitId][sourceId]) {
        textbox.value = primarySourceContent[exhibitId][sourceId];
      } else {
        textbox.value = "Content not available.";
      }
      // Set currentScreenIndex to the textbox screen (assumed last screen)
      currentScreenIndex = screens.length - 1;
      showScreen(currentScreenIndex);
    }
  
    // "View Other Source" button returns the user to the primary source selection (screen-3)
    const viewButton = document.getElementById("view-button");
    if (viewButton) {
      viewButton.addEventListener("click", function() {
        currentScreenIndex = 2; // Index for Primary Source Selection screen
        showScreen(currentScreenIndex);
      });
    }
  });