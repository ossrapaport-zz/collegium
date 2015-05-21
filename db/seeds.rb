# encoding: utf-8 
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Tag.destroy_all

tag_array = ["Ancient Greek", "Cat's Cradle", "Catullus", "Charlotte Bronte", "Classical", "Companionship as salvation", "Convention and rebellion", "Crime and Punishment", "Dangers of ignorance", "Dante Alighieri", "Darkness and light", "Death – inevitable or tragedy", "Desire to escape", "Destruction of beauty", "Disillusionment and dreams", "Displacement", "Don Quixote", "Edward Gibbon", "Empowerment", "Emptiness of attaining false dream", "Epic", "Everlasting love", "Evils of racism", "F. Scott Fitzgerald", "Facing darkness", "Facing reality", "Fading beauty", "Faith versus doubt", "Family – blessing or curse", "Fate and free will", "Fear of failure", "Female roles", "Fiction", "Franz Kafa", "Fulfillment", "Fyodor Dostoevsky", "Good versus bad", "Greed as downfall", "Growing up – pain or pleasure", "Gustave Flaubert", "Hamlet", "Hazards of passing judgment", "Heart of Darkenss", "Heartbreak of betrayal", "Herman Melville", "Heroism – real and perceived", "Hierarchy in nature", "Homer", "Identity crisis", "Illusion of power", "Immortality", "Individual versus society", "Inferno", "Injustice", "Inner versus outer strength", "Isolation", "Isolationism - hazards", "James Joyce", "Jane Eyre", "John Milton", "Joseph Conrad", "Knowledge versus ignorance", "Kurt Vonnegut", "Latin", "Leo Tolstoy", "Loneliness as destructive force", "Losing hope", "Loss of innocence", "Lost honor", "Lost love", "Love and sacrifice", "Macbeth", "Madame Bovary", "Man against nature", "Manipulation", "Materialism as downfall", "Metamorphoses", "Miguel de Cervantes", "Moby Dick", "Mortality", "Motherhood", "Names – power and significance", "Nationalism – complications", "Nature as beauty", "Necessity of work", "Oppression of women", "Optimism – power or folly", "Othello", "Overcoming – fear, weakness, vice", "Ovid", "Paradise Lost", "Patriotism – positive side or complications", "Poetry", "Power and corruption", "Power of silence", "Power of tradition", "Power of wealth", "Power of words", "Pride and downfall", "Progress – real or illusion", "Quest for discovery", "Quest for power", "Rebirth", "Redemption", "Reunion", "Role of Religion – virtue or hypocrisy", "Role of men", "Role of women", "Romantic Era", "Self – inner and outer", "Self-awareness", "Self-preservation", "Self-reliance", "Slaughterhouse 5", "Social mobility", "Technology in society – good or bad", "Temporary nature of physical beauty", "Temptation and destruction", "The Aeneid", "The Brothers Karamzov", "The Decline and Fall of the Roman Empire", "The Eclogues", "The Georgics", "The Great Gatsby", "The Iliad", "The Odyssey", "The Sound and the Fury", "Totalitarianism", "Ulysses", "Vanity as downfall", "Victorian Era", "Virgil", "Vulnerability of the meek", "Vulnerability of the strong", "War and Peace", "War – glory, necessity, pain, tragedy", "Will to survive", "William Faulkner", "William Shakespeare", "Wisdom of experience", "Working class struggles", "Youth and beauty"]

tag_array.each { |tag| Tag.create({ name: tag }) }

