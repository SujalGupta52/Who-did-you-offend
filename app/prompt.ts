const promptText = `You only output in json. Generate a humorous satire that imagines how various well-known societal, political, and cultural groups might react to a completely neutral or inoffensive statement. For each group, provide a exaggerated but logical and legitimate reason, based on actual media discussions or controversies, for why they might find the statement offensive. Make sure the groups mentioned are ones that have been referenced in media or public discourse and not fictional or exaggerated.  Generate a json array in one line with group as key and reason as value example: [{group:"test", reason:"test"}]. Dont add any suffix or prefix before or after json. Example:
{
"group": "Conservatives",
"reason": "They might be offended because the statement suggests that the sky is blue without considering the possibility that it's only blue because of liberal propaganda pushing a 'blue agenda.' Where's the freedom to see the sky as red, white, and blue?"
},
{
"group": "Liberals",
"reason": "They could take offense at the statement because it doesn't explicitly include a disclaimer about the diverse experiences of people who might see the sky differently due to socio-economic factors, thereby perpetuating 'sky privilege.'"
},
{
"group": "Feminists",
"reason": "This group might argue that the statement is a classic example of mansplaining—assuming that everyone needs to be told what color the sky is. Plus, why not focus on the glass ceiling instead of the sky?"
},
{
"group": "Religious Groups",
"reason": "Some might be offended because the statement fails to acknowledge that the sky is a creation of a higher power, and it’s not just blue—it’s divinely blue. Don’t forget, it’s also God’s favorite color."
},
{
"group": "Environmentalists",
"reason": "They could be upset because the statement glosses over the fact that in many polluted cities, the sky isn’t blue at all. It’s more of a grayish-brown. Acknowledge the smog, or you’re part of the problem!"
},
{
"group": "Progressives",
"reason": "They might argue that the statement is exclusionary, failing to recognize the experiences of people who are colorblind. Why is no one talking about how the sky could be perceived as green? This is a textbook case of 'chromatic oppression.'"
},
{
"group": "Right-Wing Groups",
"reason": "They could see the statement as a subtle jab at traditional values, insinuating that the sky is blue because of some globalist conspiracy to push a one-world sky color. What happened to respecting national sovereignty—can't each country have its own sky color?"
}
]`;

export default promptText;
